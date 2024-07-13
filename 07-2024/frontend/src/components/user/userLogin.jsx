import React, { useState } from 'react';
import axios from 'axios';
import { Input, Typography, Button } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '../context/useContext';
import { useNavigate } from 'react-router-dom';

const UserLogin = ({ closePopup, OpenUserRegister, OpenUserForgotPass }) => {
    const { setUser } = useUser();
    const [errors, setErrors] = useState({});
    const [error, setError] = useState('');
    const [useremail, setUserEmail] = useState('');
    const [usercreatedpass, setUserCreatedPass] = useState('');
    const navigate = useNavigate('');

    const apiurl = import.meta.env.VITE_SERVER_API;

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${apiurl}/api/auth/user/data/login`, { useremail, usercreatedpass });
            if (response.data.success) {
                const { user } = response.data;
                console.log('User Data:', user);
                setUser(user);
                console.log('Login Successful!');
                navigate('/user/dashboard');
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            setError('Error logging in');
            console.error('Error logging in:', error);
        }
    };

    const swtichtoforgotpass = () => {
        closePopup();
        OpenUserForgotPass();
    };

    const switchtoregister = () => {
        closePopup();
        OpenUserRegister();
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
                <div className='absolute top-4 right-5 bottom-2 cursor-pointer' onClick={closePopup} variant='text'>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <div className='w-27 mt-20 mb-20'>
                    <Typography className='uppercase' variant='h3'>
                        Login
                    </Typography>
                    {error && <Typography color="red" className="mt-4 text-center font-normal">{error}</Typography>}
                </div>
                <div className='flex w-27 flex-col item-end gap-4 mt-5 mb-40'>
                    <Input
                        label="Email"
                        name="useremail"
                        value={useremail}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                    {errors.useremail && <Typography color="red">{errors.useremail}</Typography>}
                    <Input
                        label="Create Password"
                        name="usercreatedpass"
                        type="password"
                        value={usercreatedpass}
                        onChange={(e) => setUserCreatedPass(e.target.value)}
                    />
                    {errors.usercreatedpass && (
                        <Typography color="red">{errors.usercreatedpass}</Typography>
                    )}
                    <div className="flex justify-between mb-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-transparent focus:outline-none"
                            />
                            <Typography variant="small" className="ml-2">
                                Remember Me
                            </Typography>
                        </div>
                        <Typography variant="small" className="ml-1 font-bold cursor-pointer" onClick={swtichtoforgotpass}>
                            Forgot Password?
                        </Typography>

                    </div>

                    <Button onClick={handleSubmit}>Log In</Button>

                    <Typography variant='small' className='mt-4 flex justify-center'>
                        Don't have an account?
                        <Typography variant='small' className='ml-1 font-bold cursor-pointer' onClick={switchtoregister}>Register</Typography>
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
