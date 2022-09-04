import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiStyledcomponents, SiTailwindcss } from 'react-icons/si'

export function Skills(){

    const skills = [ 
        {name_language: 'HTML', logo_skill: <AiFillHtml5 size='100%'/>},
        {name_language: 'CSS', logo_skill: <IoLogoCss3 size='95%' />},
        {name_language: 'Javascript', logo_skill: <IoLogoJavascript size='85%' />},
        {name_language: 'React.js', logo_skill: <FaReact size='90%' />},
        {name_language: 'Node.js', logo_skill: <FaNodeJs size='85%' />},
        {name_language: 'CSS-In-JS', logo_skill: <SiStyledcomponents size='95%' />},
        {name_language: 'Tailwind CSS', logo_skill: <SiTailwindcss size='90%' />}
        // {name_language: '', logo_skill: ''}
    ]

    return(
        <section className="w-full mt-4">
            <div className="p-4">
                <h3 className="text-gray-500 text-4xl text-center font-semibold"> Skills </h3>
            </div>

            <div className="w-full p-4 flex flex-col items-center justify-center vtm:flex-row vtm:flex-wrap ">

                {skills.map((skill, key) => {
                    return <div className='flex items-center justify-center flex-col w-40 p-2' key={key}>
                                <span className='text-center w-full text-xl'> {skill.name_language} </span>
                                <div className='w-32 h-32 mt-1 border-2 rounded-2xl flex items-center justify-center flex-col'>
                                    <span className='w-full flex justify-center items-center bg-transparent'> {skill.logo_skill} </span>
                                </div>                    
                            </div>
                })}

            </div>
        </section>
    )
}