import React, { useState } from 'react';
import { Typography, Button } from "@material-tailwind/react";

import Choice from '../controller/choice'

import UserLogin from '../user/userLogin'
import UserForgotPass from '../user/userForgotPass'
import UserRegister from '../user/userRegister'

import RagPickerLogin from '../rag-picker/ragPickerLogin'
import RagPickerForgotPass from '../rag-picker/ragPickerForgotPass'
import RagPickerRegister from '../rag-picker/ragPickerRegister';

const intro = () => {
    const [isPopupOpen, setPopupOpen ] = useState(false);

    //user-side
    const [ isUserLoginPopupOpen, setUserLoginPopupOpen ] = useState(false);
    const [ isUserForgotPassPopupOpen, setUserForgotPassPopupOpen ] = useState(false);
    const [ isUserRegisterationPopupOpen, setuserRegistrationPopupOpen ] = useState(false);

    //rag-picker-side
    const [ isRagPickerLoginPopupOpen, setRagPickerLoginPopupOpen ] = useState(false);
    const [ isRagPickerForgotPassPopupOpen, setRagPickerForgotPassPopupOpen ] = useState(false);
    const [ isRagPickerRegisterationPopupOpen, setRagPickerRegistrationPopupOpen ] = useState(false);

    const toggleChoicePopup = () => {
        setPopupOpen(!isPopupOpen);
    }

    //user-side
    const toggleUserLoginPopup = () => {
        setUserLoginPopupOpen(!isUserLoginPopupOpen);
    }

    const toggleUserForgotPassPopup = () => {
        setUserForgotPassPopupOpen(!isUserForgotPassPopupOpen);
    }

    const toggleUserRegisterPopup = () => {
        setuserRegistrationPopupOpen(!isUserRegisterationPopupOpen);
    }

    //rag-picker-side
    const toggleRagPickerLoginPopup = () => {
        setRagPickerLoginPopupOpen(!isRagPickerLoginPopupOpen);
    }

    const toggleRagPickerForgotPassPopup = () => {
        setRagPickerForgotPassPopupOpen(!isRagPickerForgotPassPopupOpen);
    }

    const toggleRagPickerRegisterPopup = () => {
        setRagPickerRegistrationPopupOpen(!isRagPickerRegisterationPopupOpen);
    }
    
    return (
        <section className="container mx-auto border-2 bg-white p-6 m-4 rounded-lg">
          <div className="flex flex-col md:flex-row">
            {/* Left Column */}
            <div className="md:w-1/2 p-4">
                <Typography variant="h1" color="gray" className="mb-4 uppercase text-left mt-8">
                    Rag Hero
                </Typography>
                <Typography variant="h3" color="blue-gray" className="mb-5 text-left">
                  Turn Trash into Treasure with RagHero!
                </Typography>
                <Typography color="gray" className="mb-4 font-normal text-left">
                Welcome to RagHero, where we make recycling simple, accessible, and rewarding. Our platform connects you with trusted local rag pickers, ensuring a seamless and transparent process for disposing of your recyclables. With clear pricing, verified credentials, and real-time tracking, RagHero is your reliable partner in promoting a cleaner, greener environment. Join us in turning trash into treasure and making a positive impact on our planet today!
                </Typography>
              <div className="inline-block flex justify-start mt-0 ">
                <Button onClick={toggleChoicePopup} size='lg'>
                 Get Started !
                </Button>
                {isPopupOpen && (
                    <Choice closePopup={toggleChoicePopup} OpenUserLogin={toggleUserLoginPopup}  OpenRagPickerLogin={toggleRagPickerLoginPopup}/>
                )}
                
                {/*user-side*/}
                {isUserLoginPopupOpen && (
                    <UserLogin closePopup={toggleUserLoginPopup} OpenUserRegister={toggleUserRegisterPopup}  OpenUserForgotPass={toggleUserForgotPassPopup}/>
                )}
                {isUserForgotPassPopupOpen && (
                    <UserForgotPass closePopup={toggleUserForgotPassPopup} OpenUserLogin={toggleUserLoginPopup}/>
                )}
                {isUserRegisterationPopupOpen && (
                    <UserRegister closePopup={toggleUserRegisterPopup} OpenUserLogin={toggleUserLoginPopup}/>
                )}

                {/*rag-picker-side*/}
                {isRagPickerLoginPopupOpen && (
                    <RagPickerLogin closePopup={toggleRagPickerLoginPopup} OpenRagPickerRegister={toggleRagPickerRegisterPopup}  OpenRagPickerForgotPass={toggleRagPickerForgotPassPopup}/>
                )}
                {isRagPickerForgotPassPopupOpen && (
                    <RagPickerForgotPass closePopup={toggleRagPickerForgotPassPopup} OpenRagPickerLogin={toggleRagPickerLoginPopup}/>
                )}
                {isRagPickerRegisterationPopupOpen && (
                    <RagPickerRegister closePopup={toggleRagPickerRegisterPopup} OpenRagPickerLogin={toggleRagPickerLoginPopup}/>
                )}  

              </div>
            </div>
            {/* Right Column */}
            <div className="md:w-1/2 p-4 mt-9">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg object-cover object-center w-1950 q-80"
                      src="https://cdn.pixabay.com/photo/2022/01/17/12/37/venice-6944590_1280.jpg"
                      alt="gallery-photo"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg object-cover object-center w-2940 q-80"
                      src="https://cdn.pixabay.com/photo/2016/11/22/22/21/adventure-1850912_1280.jpg"
                      alt="gallery-photo"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg object-cover object-center w-927 h-80 q-80 "
                      src="https://cdn.pixabay.com/photo/2021/10/26/16/47/man-6744539_1280.jpg"
                      alt="gallery-photo"
                    />
                  </div>
                </div>
    
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg object-cover object-center w-527 h-80 q-80"
                      src="https://cdn.pixabay.com/photo/2015/11/11/21/43/man-1039302_640.jpg"
                      alt="gallery-photo"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg object-cover object-center w-800 q-80"
                      src="https://cdn.pixabay.com/photo/2016/10/18/08/13/travel-1749508_1280.jpg"
                      alt="gallery-photo"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg object-cover object-center w-2940 q-80 "
                      src="https://cdn.pixabay.com/photo/2023/11/13/10/24/holidays-8385020_960_720.jpg"
                      alt="gallery-photo"
                    />
                  </div>
                </div>
    
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg object-cover object-center w-2940 q-80"
                      src="https://cdn.pixabay.com/photo/2020/09/17/05/12/river-5578051_1280.jpg"
                      alt="gallery-photo"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg object-cover object-center w-2940 q-80"
                      src="https://cdn.pixabay.com/photo/2021/08/03/11/48/canal-6519196_1280.jpg"
                      alt="gallery-photo"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg object-cover object-center w-687 h-80 q-80"
                      src="https://cdn.pixabay.com/photo/2021/09/27/20/47/nature-6662283_640.jpg"
                      alt="gallery-photo"
                    />
                  </div>
                </div>
    
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg object-cover object-center w-587 h-80 q-80"
                      src="https://cdn.pixabay.com/photo/2017/03/27/13/52/person-2178868_1280.jpg"
                      alt="gallery-photo"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg object-cover object-center w-800 q-80"
                      src="https://cdn.pixabay.com/photo/2022/05/11/13/55/nature-7189418_1280.jpg"
                      alt="gallery-photo"
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg object-cover object-center w-2940 q-80 "
                      src="https://cdn.pixabay.com/photo/2022/10/16/12/23/tram-7524963_1280.jpg"
                      alt="gallery-photo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

export default intro
