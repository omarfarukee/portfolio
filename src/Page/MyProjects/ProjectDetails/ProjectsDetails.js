import React from 'react';
import img1 from '../../../frenzy image/318500313_1183043778997591_128807848128035368_n.png'
import img2 from '../../../frenzy image/317602054_1292483198211633_1841440331924954865_n.png'
import img3 from '../../../frenzy image/318633274_1130509200880237_7418967144461581107_n.png'
import { FaEye, FaGithub } from 'react-icons/fa';
import MyProjectsBAckGroud from '../MyProjectsBAckGroud';
const ProjectsDetails = () => {
    return (
        <div className='p-5'>
            <h1>this is home</h1>
            <div className='border rounded-xl'>
                <div className='grid grid-cols-3 p-10 lg:ml-3  '>
                    <img className='w-96 rounded-lg' src={img2} alt="" />
                    <img className='w-96 rounded-lg' src={img1} alt="" />
                    <img className='w-96 rounded-lg' src={img3} alt="" />
                </div>
                <div className='flex justify-center mb-6'>
                    <span className='flex items-center p-2 rounded-3xl text-black font-bold btn btn-primary'><FaEye></FaEye><button className='ml-1'><a href="https://bike-frenzy-7b4f7.web.app/" target={'_blank'}>Live Site</a></button></span>
                    <span className='ml-3 flex items-center p-2 rounded-3xl text-black font-bold  btn btn-primary'><FaGithub></FaGithub> <button className='ml-1'><a href="https://github.com/omarfarukee/frenzy-Bike" target={'_blank'}>Client repo</a></button></span>
                    <span className=' ml-3 flex items-center p-2 rounded-3xl text-black font-bold  btn btn-primary'><FaGithub></FaGithub> <button className='ml-1'><a href="https://github.com/omarfarukee/frenzy-bike-server" target={'_blank'}>Server repo</a></button></span>
                </div>
                <div className='flex justify-center text-3xl font-bold mb-10'>
                    <h1>Features</h1>
                </div>
                <div className='flex justify-center mb-10'>
                    <div>
                        <p>• There are three types of products collection, user have 3 roles seller , buyer and admin</p>
                        <p>• Sellers can add products. Buyers can book and pay</p>
                        <p>• Admin can see all users and can delete user</p>
                        <p>• Seller can advertise his new added products</p>
                        <p>• User must be logged in </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProjectsDetails;