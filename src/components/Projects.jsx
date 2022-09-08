import simple_store from '../assets/online_store.png'
import countries_project from '../assets/countries.png'
import { Card } from './Card'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiPostgresql, SiStyledcomponents, SiSequelize, SiRedux } from 'react-icons/si'

export function Projects(){

    const projects = [
        {
            image_project: simple_store,
            title_project: 'Simple e-commerce',
            description: 'Um projeto fullstack de um comercio eletronico de perifericos cujo o objetivo foi atribuir os conceitos basico de um ecommerce.',
            languages_used: [<FaReact />, <FaNodeJs />,<SiRedux />, <SiPostgresql />, <SiSequelize />, <SiStyledcomponents /> ],
            development: 'Em Desenvolvimento',
            link_project: 'https://simple-ecommerce-pg.netlify.app/'
        },
        {
            image_project: countries_project,
            title_project: 'Search Countries',
            description: 'Um projeto React com o intuito da busca de informações de diversos paises',
            languages_used: [<FaReact />, <SiStyledcomponents /> ],
            development: '',
            link_project: 'https://rest-country-api-search.netlify.app/'
        },{},{},{},{}
    ]

    return(
        <section id='projects' className="w-full mt-12">

            <div className='p-4'> <h3 className="text-gray-500 text-3xl text-center font-semibold">Projetos Desenvolvidos</h3> </div>

            <div className={`p-4 w-full tm:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3`}>
                {projects.map((project, key) => {
                    if(Object.keys(project).length == 0){

                     return <div className=' w-full h-80 relative mb-4 cursor-pointer md:w-full sm:w-[75%] sm:m-auto sm:mb-4'>
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