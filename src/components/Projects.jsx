import simple_store from '../assets/first_project.png'
import { Card } from './Card'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiPostgresql, SiStyledcomponents } from 'react-icons/si'

export function Projects(){

    const projects = [
        {
            image_project: simple_store,
            title_project: 'Simple e-commerce',
            description: 'Um projeto fullstack de um comercio eletronico de perifericos cujo o objetivo foi atribuir os conceitos basico de um ecommerce.',
            languages_used: [<FaReact />, <FaNodeJs />, <SiPostgresql />, <SiStyledcomponents /> ],
            development: 'Em Desenvolvimento',
            link_project: 'https://simple-ecommerce-pg.netlify.app/'
        },
        {},{},{},{},{}
    ]

    return(
        <section className="w-full mt-4">

            <div className='p-4'> <h3 className="text-gray-500 text-3xl text-center font-semibold">Projetos Desenvolvidos</h3> </div>

            <div className={`p-4 w-full tm:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3`}>
                {projects.map((project, key) => {
                    if(Object.keys(project).length == 0){

                     return <div className=' w-full h-80 relative mb-4 cursor-pointer'>
                                <div className='w-full h-full bg-black flex items-center justify-center flex-col'>
                                    <span className='text-3xl mb-4 text-center p-2'>Projeto em Desenvolvimento</span>
                                </div>
                            </div>      
                    }else{
                        return <a href={project.link_project} target='_BLANK' ><Card project={project} key={key} /> </a>
                    }
                })}
          
            </div>

        </section>
    )
}