import React, { useState } from 'react';
import { Input, Typography, Button } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RagPickerRegister = ({ closePopup, OpenRagPickerLogin }) => {
  const [formData, setFormData] = useState({
    ragpickerfullname: '',
    ragpickeremail: '',
    ragpickerphone: '',
    ragpickercreatedpass: '',
    ragpickerfinalpass: '',
  });

  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const switchPage = () => {
    closePopup();
    OpenRagPickerLogin();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
      }
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.ragpickeremail)) {
      newErrors.ragpickeremail = 'Invalid email format';
    }

    if (formData.ragpickercreatedpass !== formData.ragpickerfinalpass) {
      newErrors.ragpickerfinalpass = 'Passwords do not match';
    }

    apiurl = import.meta.env.VITE_SERVER_API

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post(
          `${apiurl}/api/auth/rag-picker/data/register`,
          formData,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const { ragpicker } = response.data;
        console.log('Ragpicker Data:', ragpicker);
        setUser(ragpicker);
        console.log('Response:', response);
        setError('Registration Successful!');
        navigate('/rag-picker/dashboard');
      } catch (error) {
        console.error('Error:', error);
        setError('Registration Failed');
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
        <div className="absolute top-4 right-5 bottom-2 cursor-pointer" onClick={closePopup} variant="text">
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className="w-27 mt-20 mb-20">
          <Typography className="uppercase" variant="h3">
            Register
          </Typography>
        </div>
        <div className="flex w-27 flex-col item-end gap-4 mt-5 mb-40">
          <Input label="Full Name" name="ragpickerfullname" value={formData.ragpickerfullname} onChange={handleChange} />
          {errors.ragpickerfullname && (
            <Typography color="red">{errors.ragpickerfullname}</Typography>
          )}
          <Input label="Email" name="ragpickeremail" value={formData.ragpickeremail} onChange={handleChange}/>
          {errors.ragpickeremail && <Typography color="red">{errors.ragpickeremail}</Typography>}
          <Input label="Phone" name="ragpickerphone" value={formData.ragpickerphone} onChange={handleChange}/>
          {errors.ragpickerphone && <Typography color="red">{errors.ragpickerphone}</Typography>}
          <Input label="Create Password" name="ragpickercreatedpass" type="password" value={formData.ragpickercreatedpass} onChange={handleChange}/>
          {errors.ragpickercreatedpass && (
            <Typography color="red">{errors.ragpickercreatedpass}</Typography>
          )}
          <Input label="Re-Enter Password" name="ragpickerfinalpass" type="password" value={formData.ragpickerfinalpass} onChange={handleChange}/>
          {errors.ragpickerfinalpass && (
            <Typography color="red">{errors.ragpickerfinalpass}</Typography>
          )}

          <Button className="mt-4" onClick={handleSubmit}>Register</Button>
          {error && (
            <Typography color="red" className="mt-4 text-center font-normal">
              {error}
            </Typography>
          )}

          <Typography variant="small" className="mt-4 flex justify-center">
            Already have an account?
            <Typography variant="small" className="ml-1 font-bold cursor-pointer" onClick={switchPage}>Log In</Typography>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default RagPickerRegister;
