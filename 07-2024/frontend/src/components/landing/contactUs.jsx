import React from 'react';
import { Typography, Input, Textarea, Button } from "@material-tailwind/react";

const ContactUs = () => {
    return (
        <section className="container mx-auto border-2 bg-white p-6 m-4 rounded-lg">
          <div className="flex flex-col md:flex-row">
            {/* Left Column */}
            <div className="md:w-1/2 p-4">
              <img
                src="https://cdn.pixabay.com/photo/2018/06/18/03/31/girls-3481791_960_720.jpg"
                alt="card-image"
                className="h-full w-full object-cover rounded-lg w-1471 q-80"
              />
            </div>
    
            {/* Right Column */}
            <div className="md:w-1/2 p-4">
              <Typography variant="h3" color="gray" className="mb-6 uppercase">
                Reach out to us!
              </Typography>
              <div className="w-95 flex flex-col gap-4">
                <Input label="Full Name"/>
                <Input label='Email'/>
                <Input label='Subject'/>
                <Textarea label='Your Message'/>
                <Button>Send</Button>
              </div>
            </div>
          </div>
        </section>
      )
    }

export default ContactUs
