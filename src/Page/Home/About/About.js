import React, { useEffect } from 'react';
import Aos from 'aos';
import './About.css'
import pics from '../../../back-img/PicsArt_12-29-01.00.01.jpg';
import pics2 from '../../../back-img/3378857.jpg';
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin, FaTwitter, GrInstagram } from "react-icons/fa";
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='mt-48 mb-28' id='aboutMe'>

            <div data-aos='fade-right' className='flex justify-center mb-10'>
                <h1 className='text-4xl font-bold'>About <span className='text-green-400'>my-self</span> </h1>
            </div>

            <div className='flex lg:justify-center'>
                <div data-aos='fade-up' className='rounded-2xl lg:w-4/5 back-pic p-20 lg:flex justify-between back-pic-mobile'  >
                    <div>
                        <div data-aos='fade-right' className="avatar ">
                            <div className="h-80 rounded-full ring ring-error shadow-2xl ring-offset-base-100 ring-offset-2 about-img">
                                <img src={pics} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className=' lg:pl-8 lg:text-center'>
                        <h1 className='text-3xl font-bold text-white'>Hi...</h1>
                        <p className='text-white'>
                        I live in Dhaka Bangladesh. I have been establishing myself in the web development sector for a year. I like to see, understand and learn new things. So I never get tired of learning. No matter what I do, I am dedicated to my work. I am active and hardworking. I enjoy learning new things and tackling new challenges. I am very simple and sociable
                        </p>
                        <div data-aos='fade-left' className='flex mt-6 ml-12 justify-center mr-4'>
                            <span className='mr-4 text-2xl hover:text-white text-black'><a href="https://www.instagram.com/omar_faruk2000" target={'_blank'}><FaInstagram></FaInstagram></a></span>
                            <span className='mr-4 text-2xl hover:text-white text-black'><a href="https://www.linkedin.com/in/omar-faruk-b66513257/" target={'_blank'}><FaLinkedin></FaLinkedin></a> </span>
                            <span className='mr-4 text-2xl hover:text-white text-black'><a href="https://www.facebook.com/profile.php?id=100064049902400" target={'_blank'}><FaFacebookSquare></FaFacebookSquare></a></span>
                            <span className='mr-4 text-2xl hover:text-white text-black'><a href="https://github.com/omarfarukee" target={'_blank'}><FaGithub></FaGithub></a></span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;