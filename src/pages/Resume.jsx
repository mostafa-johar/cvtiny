import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


// Resuem Component
const Resume = () => {
    // variables
    const [experience, setExperience] = useState([
        {
            title: "Front-End developer",
            year: "2018-present",
            text: "I can covert any psd to Html and i can use figma , Adobe xd and any sketch if you want..etc",
            id: 1
        },
        {
            title: "photoshop",
            year: "2017",
            text: "I know how i use photoshop",
            id: 2
        }
    ])
    const [education, setEducation] = useState([
        {
            title: "High School",
            year: "2013-2018",
            text: "I graduated from Al Raml school ",
            id: 1
        },
        {
            title: "Alex University",
            year: "2018-2022",
            text: "I studied Mathematica and Computer Science.",
            id: 2
        }, {
            title: 'Web Developer',
            year: '2018-2019',
            text: 'I have a developer certificate from computer studies institute at the Armed Force in Alex.',
            id: 3
        },
        {
            title: 'Web Developer',
            year: '2018-2019',
            text: 'I have a developer certificate from computer studies institute at the Armed Force in Alex.',
            id: 3
        }
    ])
    const [Professional, setProfessional] = useState([
        {
            skill: 'Html',
            width: 'w-[99%]',
            percent: 99,
            id: 1
        },
        {
            skill: 'Css',
            width: 'w-[96%]',
            percent: 96,
            id: 2
        },
        {
            skill: 'JavaScript',
            width: 'w-[90%]',
            percent: 90,
            id: 3
        },
        {
            skill: 'Scss',
            width: 'w-[95%]',
            percent: 95,
            id: 4
        },
        {
            skill: 'React',
            width: 'w-[90%]',
            percent: 90,
            id: 5
        },
        {
            skill: 'Vue',
            width: 'w-[93%]',
            percent: 93,
            id: 6
        },
        {
            skill: 'Nuxtjs',
            width: 'w-[90%]',
            percent: 90,
            id: 7
        },
        {
            skill: 'Git | GitHub',
            width: 'w-[80%]',
            percent: 80,
            id: 8
        },
    ])
    const [Languages, setLanguages] = useState([
        {
            skill: 'English',
            width: 'w-[70%]',
            percent: 70,
            id: 1
        },
        {
            skill: 'French',
            width: 'w-[0]',
            percent: 0,
            id: 2
        },
        {
            skill: 'Spanish',
            width: 'w-[0]',
            percent: 0,
            id: 3
        },
        {
            skill: 'German',
            width: 'w-[0]',
            percent: 0,
            id: 4
        },
    ])

    // render
    return (

        <article className="resume">

            {/* Experince + Education */}
            <section className="flex flex-col lg:flex-row gap-10 py-5">

                {/* Experience */}

                <div className="experience flex-1">

                    <h3 className="heading_title">
                        <FontAwesomeIcon icon={faBriefcase} className='text-blue-500' />
                        <span className='ml-2'>Experience</span>
                    </h3>

                    <div className='resume_boxes ml-5'>
                        {
                            experience.map((exp) => (
                                <div className='resume-box shadow-md border-l-2 border-l-blue-400 p-4 mt-6 ' key={exp.id}>
                                    <h4 className='text-black text-sm font-bold'>{exp.title}</h4>
                                    <p className='text-red-600 text-[12px] font-bold my-1'>{exp.year}</p>
                                    <p className='text-sm text-gray-700'>{exp.text}</p>
                                </div>
                            ))
                        }

                    </div>

                </div>

                {/* Education */}

                <div className="education flex-1">
                    <h3 className="heading_title">
                        <FontAwesomeIcon icon={faGraduationCap} className='text-blue-500' />
                        <span className='ml-2'>Education</span>
                    </h3>
                    <div className='resume_boxes ml-5'>
                        {
                            education.map((edu) => (
                                <div className='resume-box shadow-md border-l-2 border-l-blue-400 p-4 mt-6 ' key={edu.id}>
                                    <h4 className='text-black text-sm font-bold'>{edu.title}</h4>
                                    <p className='text-red-600 text-[12px] font-bold my-1'>{edu.year}</p>
                                    <p className='text-sm text-gray-700'>{edu.text}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>

            {/* skills */}

            <section className='flex flex-col lg:flex-row gap-10 py-5'>

                {/* Professional Skills */}

                <div className='pro_skills flex-1'>
                    <h3 className='heading_title'>Professional Skills</h3>
                    {
                        Professional.map((pro) => (
                            <div className='progress mt-6' key={pro.id}>
                                <h4 className='text-black block'>{pro.skill}</h4>
                                <div className='w-full h-5 border-2 rounded-xl overflow-hidden '><span className={` flex items-center text-[13px] text-black font-medium pl-4 bg-blue-400 ${pro.width} h-full rounded-xl `}>{pro.percent
                                }%</span></div>
                            </div>
                        ))
                    }



                </div>

                {/* Languages Skills */}

                <div className='lang_skills flex-1'>
                    <h3 className='heading_title'>Languages Skills</h3>
                    {
                        Languages.map((lang) => (
                            <div className='progress mt-6' key={lang.id}>
                                <h4 className='text-black block'>{lang.skill}</h4>
                                <div className='w-full h-5 border-2 rounded-xl overflow-hidden '>
                                    {(lang.percent !== 0) && <span className={` flex items-center text-[13px] text-black font-medium pl-4 bg-blue-400 ${lang.width} h-full rounded-xl `}>{lang.percent
                                    }%</span>}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </article>
    );
}

export default Resume;
