import simple_store from '../assets/first_project.png'

export function Projects(){

    const projects = [
        {
            image_project: '',
            title_project: '',
            description_product: '',
            link_project: ''
        }
    ]

    return(
        <section className="w-full">

            <div className='p-4'> <h3 className="text-gray-500 text-3xl text-center font-semibold">Alguns Projetos</h3> </div>

         {/* Primeiro */}
            <div className={`p-4 w-full tm:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3`}>
                {/* Primeiro */}
                <div className=' w-full h-80 relative mb-4'>

                    <div className='w-full h-full'>
                        <img src={simple_store} className='w-full h-full' />
                    </div>

                    <div className='absolute w-full bottom-0 p-4 h-[6.25rem] hover:h-[90%] transition-all duration-300 overflow-hidden bg-theme-dark/95 flex items-center flex-col'>
                        <div className='text-2xl text-gray-500 p-4 mb-6'>
                            <h3>Simple e-commerce</h3>    
                        </div>
                        
                        <div className='p-2'>
                            <span>
                                Descrição do produto
                            </span>
                        </div>
                    </div>

                </div>

                {/* Segundo */}

                <div className=' w-full h-80 relative mb-4'>

                    <div className='w-full h-full'>
                        <img src={simple_store} className='w-full h-full' />
                    </div>

                    <div className='absolute w-full bottom-0 p-4 h-[6.25rem] hover:h-[90%] transition-all duration-300 overflow-hidden bg-theme-dark/95 flex items-center flex-col'>
                        <div className='text-2xl text-gray-500 p-4 mb-6'>
                            <h3>Simple e-commerce</h3>    
                        </div>
                        
                        <div className='p-2'>
                            <span>
                                Descrição do produto
                            </span>
                        </div>
                    </div>

                </div>

                {/* Terceiro */}

                <div className=' w-full h-80 relative'>

                    <div className='w-full h-full'>
                        <img src={simple_store} className='w-full h-full' />
                    </div>

                    <div className='absolute w-full bottom-0 p-4 h-[6.25rem] hover:h-[90%] transition-all duration-300 overflow-hidden bg-theme-dark/95 flex items-center flex-col'>
                        <div className='text-2xl text-gray-500 p-4 mb-6'>
                            <h3>Simple e-commerce</h3>    
                        </div>
                        
                        <div className='p-2'>
                            <span>
                                Descrição do produto
                            </span>
                        </div>
                    </div>

                </div>

                {/* Quarto */}

                <div className=' w-full h-80 relative mb-4'>

                    <div className='w-full h-full'>
                        <img src={simple_store} className='w-full h-full' />
                    </div>

                    <div className='absolute w-full bottom-0 p-4 h-[6.25rem] hover:h-[90%] transition-all duration-300 overflow-hidden bg-theme-dark/95 flex items-center flex-col'>
                        <div className='text-2xl text-gray-500 p-4 mb-6'>
                            <h3>Simple e-commerce</h3>    
                        </div>
                        
                        <div className='p-2'>
                            <span>
                                Descrição do produto
                            </span>
                        </div>
                    </div>

                </div>                
            </div>



        </section>
    )
}