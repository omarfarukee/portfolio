import React from 'react';
import AnimationBackground from '../Animation/AnimationBackground';
import Footer from '../Footer/Footer';
import { TypeAnimation } from 'react-type-animation';
import './Home.css'
import img1 from '../../images/pepe-PhotoRoom.png'
import img2 from '../../images/pngwing.com__1_-removebg-preview (2).png'
import img3 from '../../images/pngwing.com__1_-removebg-preview.png'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter, GrInstagram } from "react-icons/fa";
import About from './About/About';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import MySkills from '../MySkills/MySkills';
import Contact from '../Contact/Contact';

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='mt-5 '>
            {/* step 1 */}
            <div className='flex justify-center lg:pl-24 p-3'>
                <AnimationBackground />
                <div className="container gap-52 lg:grid lg:grid-cols-2 items-center ">
                    <div className='font-bold' data-aos='fade-right'>
                        <div className='homeFont'>
                            <TypeAnimation
                                sequence={[
                                    'Hello, I am Omar Faruk',
                                    1500,
                                    'A Full-Stack Web developer',
                                    1000
                                ]}
                                speed={10} // Custom Speed from 1-99 - Default Speed: 40
                                style={{ fontSize: '2.2em' }}
                                wrapper="span" // Animation will be rendered as a <span>
                                repeat={Infinity} // Repeat this Animation Sequence infinitely
                            />
                        </div>
                        <p className='mt-10 '>Becoming a good minded developer requires the right intention, hard work and practice. So for almost a long year I was able to identify myself as a Full-Stack web developer by adopting that consistency. I have learned a lot in my journey as a developer and am still learning and will learn in the future. </p>
                        <div className='flex mt-6 '>
                           
                        </div>
                    </div>
                    <div data-aos='fade-left' className='mt-5' >
                        <div className="avatar">
                            <div className=" w-80 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img1} className/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MySkills></MySkills>
            {/* step 2 */}
            <About></About>

            <Contact></Contact>
        </div>

    );
};

export default Home;