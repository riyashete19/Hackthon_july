import React, { useState } from 'react'
import { 
    Input,
    Typography,
    Button
 } from '@material-tailwind/react'

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
    faTimes 
} from '@fortawesome/free-solid-svg-icons';

const Choice = ({ closePopup, OpenUserLogin, OpenRagPickerLogin }) => {
    const [ error , setError ] =useState('');


    const SwitchtoUserLogin = () => {
        closePopup();
        OpenUserLogin();
    };

    const SwtichtoRagPickerLogin = () => {
        closePopup();
        OpenRagPickerLogin();
    }


    const handleSubmit = () => {
        setError();
    };

     
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
            <div className='absolute top-4 right-5 bottom-2 cursor-pointer' onClick={closePopup} variant='text'>
                <FontAwesomeIcon icon={faTimes} />
            </div>
            <div className='w-27 mt-20 mb-20'>
                <Typography className='uppercase' variant='h3'>
                    ChooseYour role
                </Typography>
                {error && <Typography color="red" className="mt-4 text-center font-normal">{error}</Typography>}
            </div>
            <div className='flex w-27 flex-col item-end gap-4 mt-5 mb-40'>
                <Button onClick={SwitchtoUserLogin}>I Am a User</Button>
                <Button onClick={SwtichtoRagPickerLogin}>I Am A Rag Picker</Button>
            </div>
        </div>
    </div>
  )
}

export default Choice
