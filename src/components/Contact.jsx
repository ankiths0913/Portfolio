import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Contact() {
   
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async(data) => {
       const userInfo={
        name:data.name,
        email:data.email,
        message:data.message
       }
try {
        await axios.post("https://getform.io/f/ayvvnwxb", userInfo);
        toast.success("Your message has been sent")
} catch (error) {
  console.log(error);
  toast.error("Something went wrong")
}
  }
  return (
    <>
    <div name="Contacts" className="max-w-screen-2xl container mx-auto px-4 md:px-20">
       <h1 className="text-3xl font-bold mb-4"> Contact me </h1>
       <span>Please fill out the form below to contact me</span>
       <div className="flex flex-col mb-10 items-center justify-center mt-5">
            <form 
            onSubmit={handleSubmit(onSubmit)}
            //action="https://getform.io/f/ayvvnwxb" 
            //method="POST"
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
                <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
                <div className="flex flex-col mb-4">
                    <lable 
                      className="block text-gray-700">FullName</lable>
                    <input 
                    {...register("name", {required: true})}
                    className="shadow rounded-lg appearance-non border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                      id="name" 
                      name="name"
                      type="text" 
                      placeholder="Enter your fullname"
                    />
                    {errors.name && <span>This Field is required</span>}
                </div>
                <div className="flex flex-col mb-4">
                    <lable 
                      className="block text-gray-700">Email Address</lable>
                    <input 
                    {...register("email", {required: true})}
                    className="shadow rounded-lg appearance-non border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                      id="email"
                      name="email"
                      type="text" 
                      placeholder="Enter your email address"
                    />
                    {errors.email && <span>This Field is required</span>}
                </div>
                <div className="flex flex-col mb-4">
                    <lable 
                      className="block text-gray-700">Message</lable>
                    <textarea 
                    {...register("message", {required: true})}
                      className="shadow rounded-lg appearance-non border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                      id="message" 
                      name="message"
                      type="text" 
                      placeholder="Type your message here"
                    />
                    {errors.message && <span>This Field is required</span>}
                </div>
                <button type="sumbit" className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300">Send</button>
            </form>
       </div>
    </div>
    </>
  )
}

export default Contact
