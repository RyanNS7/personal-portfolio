

export function Card({project}){
    return(
            <div className=' w-full h-80 relative mb-4 md:w-full sm:w-[75%] sm:m-auto sm:mb-4'>

            <div className='w-full h-full'>
                <img src={project.image_project} className='w-full h-full' />
            </div>

            <div className='absolute w-full bottom-0 p-4 h-[6.25rem] hover:h-[90%] transition-all duration-300 overflow-hidden bg-theme-dark/95 flex items-center flex-col'>
                <div className='text-2xl text-gray-500 p-4 mb-2'>
                    <h3>{project.title_project}</h3>    
                </div>
                
                <div className='p-2 flex flex-col items-center'>
                    <span className="mb-4">
                        {project.description}
                    </span>
                </div>

                <div className="flex flex-row items-center justify-center">
                    {project.languages_used.map((language, key) => {
                        return <div className=" w-10 border-2 border-gray-500 rounded-lg text-2xl mr-2 p-1 flex justify-center" key={key}> {language} </div>
                    })}
                </div>

                <div className="mt-2">
                    <span className="text-gray-500/80">{project.development}</span>
                </div>
            </div>

        </div>
    )
}