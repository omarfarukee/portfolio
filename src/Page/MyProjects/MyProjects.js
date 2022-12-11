import React, { useEffect } from 'react';
import MyProjectsBAckGroud from './MyProjectsBAckGroud';
import { TypeAnimation } from 'react-type-animation';
import img from '../../images/285530634_347909957293188_2165742306452126301_n (1).jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import pic1 from '../../images/315371608_810671093355449_776004155346450371_n.png'
import pic2 from '../../images/315964209_1160246211550731_2096485115507971891_n.png'
import pic3 from '../../images/316045196_1266436347546808_3676656200596390065_n.png'
import pic4 from '../../images/best.png'
import { FaGithub, FaEye } from 'react-icons/fa';
import '../Home/Home.css'
import { Link } from 'react-router-dom';
const MyProjects = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])



    return (
        <div>

            {/* projects */}
            <div className='flex justify-center mt-28'>
                <MyProjectsBAckGroud />
                <div className="avatar">
                    <div data-aos='fade-down' className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
            </div>
            <div className='flex justify-center mb-28 project-text' >
                <TypeAnimation
                    sequence={[
                        'Hello, there',
                        1500,
                        'here are my some projects',
                        1000
                    ]}
                    speed={10} // Custom Speed from 1-99 - Default Speed: 40
                    style={{ fontSize: '2.2em' }}
                    wrapper="span" // Animation will be rendered as a <span>
                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                />
            </div>
            <div className='lg:grid lg:grid-cols-3 lg:pl-12'>
                <div>
                    <div className="card  lg:w-96 bg-base-100 shadow-xl image-full project-card" >
                        <figure ><img src={pic1} style={{}} className='w-full' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold lg:ml-20 text-white text-3xl">Frenzy Bike</h2>
                            <div className="card-actions mt-20 justify-around">
                                <span  className='flex items-center p-2 rounded-3xl text-black font-bold btn btn-primary'><FaEye></FaEye><button className='ml-1'><a href="https://bike-frenzy-7b4f7.web.app/" target={'_blank'}>Live Site</a></button></span>
                                <span  className='flex items-center p-2 rounded-3xl text-black font-bold btn btn-primary'> <Link to='/frenzyDetails'><button className='ml-1'><a>More details</a></button></Link></span>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card lg:w-96 bg-transparent shadow-xl">
                            <div className="card-body text-center">
                                <h2 className="card-title ml-28" data-aos='fade-down'>Technology</h2>
                                <div className='grid grid-cols-2 gap-2 pl-8' data-aos='fade-up'>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>HTML</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>CSS</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>Javascript</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>React</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>Firebase</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>Node.js</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>Express.js</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>MongoDB</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>Vercel</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>Stripe</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>TailWind</p>

                                </div>

                                {/* <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card  lg:w-96 bg-base-100 shadow-xl image-full project-card" >
                        <figure ><img src={pic3} style={{}} className='w-full' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold lg:ml-20 text-white text-3xl">Home's Food</h2>
                            <div className="card-actions mt-20 justify-around">
                                <span className='flex items-center p-2 rounded-3xl text-black font-bold btn btn-primary'><FaEye></FaEye><button className='ml-1'><a href="https://homes-food.web.app/" target={'_blank'}>Live Site</a></button></span>
                                <span  className='flex items-center p-2 rounded-3xl text-black font-bold btn btn-primary'> <Link to='/homesDetails'><button className='ml-1'><a>More details</a></button></Link></span>

                               
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card lg:w-96 bg-transparent shadow-xl">
                            <div className="card-body text-center">
                                <h2 className="card-title ml-28" data-aos='fade-down'>Technology</h2>
                                <div className='grid grid-cols-2 gap-2 pl-8' data-aos='fade-up'>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>HTML</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>CSS</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>Javascript</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>React</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>Firebase</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>Node.js</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>React Icons</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>Express.js</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>MongoDB</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>Vercel</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>TailWind</p>

                                </div>

                                {/* <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card lg:w-96 bg-base-100 shadow-xl image-full project-card" >
                        <figure ><img src={pic4} style={{}} className='w-full' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold lg:ml-20 text-white text-3xl">Best Learner's</h2>
                            <div className="card-actions mt-20 justify-around">
                                <span className='flex items-center p-2 rounded-3xl text-black font-bold btn btn-primary'><FaEye></FaEye><button className='ml-1'><a href="https://best-learners-4cb8c.web.app/" target={'_blank'}>Live Site</a></button></span>
                                <span  className='flex items-center p-2 rounded-3xl text-black font-bold btn btn-primary'> <Link to='/best'><button className='ml-1'><a>More details</a></button></Link></span>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card lg:w-96 bg-transparent  shadow-xl">
                            <div className="card-body text-center">
                                <h2 className="card-title ml-28" data-aos='fade-down'>Technology</h2>
                                <div className='grid grid-cols-2 gap-2 pl-8' data-aos='fade-up'>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>HTML</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>CSS</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>Javascript</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>React</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>Node.js</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>Rechart</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>Rest API</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>React Icons</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>Bootstrap</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>FireBase</p>
                                    <p className='w-28 text-black p-1 rounded-lg font-bold' style={{ backgroundColor: '#3DBE29' }}>Vercel</p>

                                </div>

                                {/* <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyProjects;