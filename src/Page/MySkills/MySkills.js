import React from 'react'
import { SkillBar } from 'react-skillbars';
import img from '../../images/skills.png'
import '../Home/Home.css'
const MySkills = () => {

    const skills = [
        { type: 'HTML', level: 100 },
        { type: 'CSS', level: 98 },
        { type: 'Javascript', level: 92 },
        { type: 'React', level: 90 },
        { type: 'Node.js', level: 85 },
        { type: 'TailWind ', level: 95 },
        { type: 'Bootstrap', level: 98},
        { type: 'Express.js', level: 75 },
        { type: 'MongoDB', level: 78 }
    ];
    const colors = {
        bar: '#3DBE29',
        title: {
            text: {
                hue: {
                    minimum: 50,
                    maximum: 80,
                },
                saturation: 50,
                level: {
                    minimum: 50,
                    maximum: 70,
                },
            },
            background: {
                hue: 80,
                saturation: 80,
                level: 30,
            },
        },
    };
    return (
        <div className='mt-40 '>
            <div data-aos='fade-up' className='flex justify-center mb-10 '>
                <h1 className='text-4xl font-bold'>My <span className='text-green-400'>skills</span> </h1>
            </div>
            <div className=''>
                <div className='lg:flex justify-around items-center  w-full'>
                    <div data-aos='fade-down'>
                        <img className='lg:h-96 skill-img rounded-2xl border' src={img} alt="" />
                    </div>
                    <div data-aos='fade-down' className='lg:w-96 skill-ber'>
                        <SkillBar skills={skills} height={40} colors={colors} />
                    </div>

                </div>
            </div>



        </div>
    );
};

export default MySkills;