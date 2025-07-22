import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import * as Z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import emailjs from '@emailjs/browser';


const ContactForm = () => {


  const intialValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  const contactFormSchema = Z.object({
    name: Z.string().nonempty("Name is required"),
    email: Z.string().email("Invalid email").nonempty("Email is required"),
    subject: Z.string().nonempty("Subject is required"),
    message: Z.string().nonempty("Message is required")
  })

  const { register, handleSubmit, reset, formState: { errors }
  } = useForm({
    defaultValues: intialValues,

    resolver: zodResolver(contactFormSchema)
  });
  const [loading, setLoading] = useState(false)
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const payload = {
        title: data.subject,
        name: data.name,
        email: data.email,
        message: data.message,
        time: new Date().toLocaleString(),

      };
      const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
      const userID = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

      await emailjs.send(serviceID, templateID, payload, {
        publicKey: userID
      })
    } catch (error) {
      console.log("FAILE....", error);
      alert("Failed to send message, please try again.");
    } finally {
      setLoading(false);
      reset(intialValues)
      alert("Message send successfully")
    }
  }

  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <div className='flex-center group cursor-pointer'>
      <form onSubmit={handleSubmit(onSubmit)}
        className='w-full text-[#a7a7a7] flex flex-col gap-7'>
        <div className="">
          <label className='block text-white md:text-2xl font-medium mb-2' htmlFor="name">Name</label>
          <input {...register("name")}
            type="text" id='name' placeholder='Chhay'
            className='bg-black-300 w-full p-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] rounded-md' />
          {errors.name && (
            <span className='text-red-500'>{errors.name.message}</span>
          )}
        </div>

        <div className="">
          <label className='block text-white md:text-2xl font-medium mb-2' htmlFor="email">Email Adress</label>
          <input {...register("email")}
            type="text" id='email' placeholder='hello@gmail.com'
            className='bg-black-300 w-full p-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] rounded-md' />
          {errors.email && (
            <span className='text-red-500'>{errors.email.message}</span>
          )}
        </div>

        <div className="">
          <label className='block text-white md:text-2xl font-medium mb-2' htmlFor="subject">Subject</label>
          <input {...register("subject")}
            type="text" id='subject' placeholder='Chhay'
            className='bg-black-300 w-full p-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] rounded-md' />
          {errors.subject && (
            <span className='text-red-500'>{errors.subject.message}</span>
          )}
        </div>

        <div className="">
          <label className='block text-white md:text-2xl font-medium mb-2' htmlFor="message">Message</label>
          <textarea {...register("message")}
            type="text" id='message' placeholder='Enter Your Message'
            className='bg-black-300 w-full h-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] rounded-b-md' />
          {errors.message && (
            <span className='text-red-500'>{errors.message.message}</span>
          )}
        </div>

        <button type='submit'
          disabled={loading}
          className={`disabled:opacity-70 cursor-pointer w-full py-4 bg-blue-50 text-white-50 font-semibold rounded-md hover:bg-blue-300 transition-all duration-300`}>
          {
            loading ? "Sending......" : "Send Message"
          }
        </button>

      </form>
    </div>
  )
}

export default ContactForm
