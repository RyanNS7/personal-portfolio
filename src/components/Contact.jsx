import { BsWhatsapp, BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdOutlineMail } from 'react-icons/md'

export function Contact(){
    return(
        <div className="w-full flex justify-center items-center flex-col">
            <div className='w-full text-center p-4 mt-8'>
                <h3 className="text-gray-500 text-4xl"> Contact </h3>
            </div>

            <div className='w-full text-center mt-8 tm:p-4 tm:grid tm:gap-4 md:grid-cols-4'>
                <div className='mb-8 tm:mr-4'>
                    <div className='border-2 p-3 rounded-full mb-2 w-[4.25rem] m-auto'>
                        <BsWhatsapp size={'2.5rem'} />    
                    </div>
                    
                    <div>
                        <span className='text-xl'>(11) 959135468</span>
                    </div>
                </div>

                <div className='mb-8 tm:mr-4'>
                    <div className='border-2 p-3 rounded-full mb-2 w-[4.25rem] m-auto'>
                        <MdOutlineMail size={'2.5rem'}/>    
                    </div>

                    <div>
                        <span className='text-xl'> ryanns777@gmail.com </span>
                    </div>
                    
                </div>

                <div className='mb-8 tm:mr-4'>
                    <a href='https://www.linkedin.com/in/ryanns7/' target='_blank'>
                        <div className='border-2 p-3 rounded-full mb-2 w-[4.25rem] m-auto'>
                            <BsLinkedin size={'2.5rem'}/>    
                        </div>

                        <div>
                            <span className='text-xl'>RyanNS7</span>
                        </div>
                    </a>    
                </div>

                <div className='mb-8 tm:mr-4'>
                    <a href='https://github.com/RyanNS7' target='_blank'>
                        <div className='border-2 p-3 rounded-full mb-2 w-[4.25rem] m-auto'>
                            <BsGithub size={'2.5rem'}/>    
                        </div>

                        <div> 
                            <span className='text-xl'>RyanNS7</span>
                        </div>
                    </a>
                </div>

            </div>

        </div>
    )
}