import React from 'react';
import { FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';
import img from '../../contact-img/imgggg.jpg'
import './Contact.css'
const Contact = () => {
    return (
        <div className='mb-28 p-5'>
           <div data-aos='fade-up' className='flex justify-center mb-10'>
                <h1 className='text-4xl font-bold'>Contact <span className='text-green-400'>me</span> </h1>
            </div>
            <div className='backs' data-aos='fade-down'>
                <div>
                    <div className="avatar flex justify-center">
                        <div  data-aos='fade-down' className=" h-52 rounded-full ring-offset-base-100 ring-offset-2 mt-10">
                            <img src={img} />
                        </div>
                    </div>
                </div>
                <div className='mt-8 flex justify-center' data-aos='fade-up'>
                    <input type="text" placeholder="Email" className="input  input-primary w-full max-w-xs bg-transparent" />
                    <input type="text" placeholder="Message" className="input  input-primary w-full max-w-xs bg-transparent ml-2" />
                    <button className="btn btn-active btn-ghost ml-2">Submit</button>
                </div>
                <div className='lg:flex font-bold text-white icon mt-20 justify-center contact-icon' data-aos='fade-up' >

                    <p className='flex items-center font-medium lg:ml-7'><FaWhatsapp></FaWhatsapp> <span className='ml-2'>+880 1943797513</span></p>
                     <p className='flex items-center font-medium lg:ml-7'><FaMailBulk></FaMailBulk> <span className='ml-2'>umarfaruque1920@gmail.com</span></p>
                    <p className='flex items-center font-medium lg:ml-7'><FaPhone></FaPhone><span className='ml-2'>+880 01943797513</span></p>

                </div>
            </div>
        </div>
    );
};

export default Contact;