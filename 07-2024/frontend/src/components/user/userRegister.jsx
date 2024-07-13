import React, { useState } from 'react';
import axios from 'axios';
import { Input, Typography, Button } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/useContext';

const UserRegister = ({ closePopup, OpenUserLogin }) => {
  const { setUser } = useUser();
  const [formData, setFormData] = useState({
    uerfullname: '',
    useremail: '',
    userphone: '',
    usercreatedpass: '',
    userfinalpass: '',
  });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const switchpage = () => {
    closePopup();
    OpenUserLogin();
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

    // Validate required fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
      }
    });

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.useremail)) {
      newErrors.email = 'Invalid email format';
    }

    // Validate password match
    if (formData.usercreatedpass !== formData.userfinalpass) {
      newErrors.userfinalpass = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post(
          'https://july-hackthon-backend.vercel.app/api/auth/user/data',
          formData,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const { user } = response.data;
        console.log('User Data:', user);
        setUser(user);
        console.log('Response:', response);
        setError('Registration Successful!');
        navigate('/user/dashboard'); // Navigate to user dashboard after successful registration
      } catch (error) {
        console.error('Error:', error);
        setError('Registration Failed'); // Handle registration failure
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
        <div
          className="absolute top-4 right-5 bottom-2 cursor-pointer"
          onClick={closePopup}
          variant="text"
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className="w-27 mt-20 mb-20">
          <Typography className="uppercase" variant="h3">
            Register
          </Typography>
        </div>
        <div className="flex w-27 flex-col item-end gap-4 mt-5 mb-40">
          <Input
            label="Full Name"
            name="uerfullname"
            value={formData.uerfullname}
            onChange={handleChange}
          />
          {errors.uerfullname && (
            <Typography color="red">{errors.uerfullname}</Typography>
          )}
          <Input
            label="Email"
            name="useremail"
            value={formData.useremail}
            onChange={handleChange}
          />
          {errors.useremail && <Typography color="red">{errors.useremail}</Typography>}
          <Input
            label="Phone"
            name="userphone"
            value={formData.userphone}
            onChange={handleChange}
          />
          {errors.userphone && <Typography color="red">{errors.userphone}</Typography>}
          <Input
            label="Create Password"
            name="usercreatedpass"
            type="password"
            value={formData.usercreatedpass}
            onChange={handleChange}
          />
          {errors.usercreatedpass && (
            <Typography color="red">{errors.usercreatedpass}</Typography>
          )}
          <Input
            label="Re-Enter Password"
            name="userfinalpass"
            type="password"
            value={formData.userfinalpass}
            onChange={handleChange}
          />
          {errors.userfinalpass && (
            <Typography color="red">{errors.userfinalpass}</Typography>
          )}

          <Button className="mt-4" onClick={handleSubmit}>
            Register
          </Button>

          {error && (
            <Typography color="red" className="mt-4 text-center font-normal">
              {error}
            </Typography>
          )}

          <Typography variant="small" className="mt-4 flex justify-center">
            Already have an account?
            <Typography
              variant="small"
              className="ml-1 font-bold cursor-pointer"
              onClick={switchpage}
            >
              Log In
            </Typography>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
