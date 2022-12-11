import React from 'react';
import { FaEye, FaGithub } from 'react-icons/fa';
import img1 from '../../../best image/318093057_686565039546839_657624089566030827_n.png'
import img2 from '../../../best image/317592109_2386321341533429_8096612495669486698_n.png'
import img3 from '../../../best image/317578315_1146050992943666_3585689622257038084_n.png'

const Best = () => {
    return (
        <div>
          
            <div className='p-5'>
                <div className='flex justify-center mt-5 mb-5 text-3xl font-bold text-green-500'>
                    <h1>Best Learner's</h1>
                </div>
                
                <div className='border rounded-xl'>
                    <div className='grid grid-cols-3 p-10 lg:ml-3  '>
                        <img className='w-96 rounded-lg' src={img2} alt="" />
                        <img className='w-96 rounded-lg' src={img1} alt="" />
                        <img className='w-96 rounded-lg' src={img3} alt="" />
                    </div>
                    <div className='flex justify-center mb-6'>
                    <span className='flex items-center p-2 rounded-3xl text-black font-bold btn btn-primary'><FaEye></FaEye><button className='ml-1'><a href="https://best-learners-4cb8c.web.app/" target={'_blank'}>Live Site</a></button></span>
                                <span className='flex ml-3 items-center p-2 rounded-3xl text-black font-bold  btn btn-primary'><FaGithub></FaGithub> <button className='ml-1'><a href="https://github.com/omarfarukee/best-learners" target={'_blank'}>Client repo</a></button></span>
                                <span className='flex ml-3 items-center p-2 rounded-3xl text-black font-bold  btn btn-primary'><FaGithub></FaGithub> <button className='ml-1'><a href="https://github.com/omarfarukee/best-learners-server" target={'_blank'}>Server repo</a></button></span>
                    </div>
                    <div className='flex justify-center text-3xl font-bold mb-10'>
                        <h1>Features</h1>
                    </div>
                    <div className='flex justify-center mb-10'>
                        <div>
                            <p>• User can see the items he wants to know</p>
                            <p>• Can review the specific item he wants to</p>
                            <p>• User can add item</p>
                            <p>• User should be logged in before reviewing or adding</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Best;