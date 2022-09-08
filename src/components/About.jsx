

export function About(){
    return(
        <section id="about" className="w-full p-4">

            <div className="w-full text-center p-4 text-3xl">
                <h3 className="text-gray-500">Sobre Mim</h3>
            </div>

            <div className="p-4 w-full text-lg">
                <p className="indent-4 mb-2 lg:w-1/2 sm:w-[70%] tm:m-auto tm:mb-4 tm:text-center">
                    21 anos, Desenvolver Front-end apaixonado por programação desde os 14 anos, porem comecei a mexer com 
                    códigos quando completei 19 anos, focado principalmente no javascript, como React.js no front-end e 
                    conceitos basicos de Node.js pelo back-end.
                </p>

                <p className="indent-4 mb-2 lg:w-1/2 sm:w-[70%] tm:m-auto md:mb-4 tm:text-center"> 
                    Sempre prezando os estudos de forma que possa adquirir 
                    cada vez mais descobertas que possam agregar tanto na minha evolução quanto na evolução dos meus colegas, 
                    pois como diria a autora Jéssica Lima de Jesus: 

                    <q className="w-full block text-center p-4 my-2 shadow-2xl bg-gray-700/30 text-gray-300">Cada dia mais uma descoberta...
                    Cada dia mais um aprendizado (...)!</q>      

                    Pois é através do aprendizado que podemos evoluir cada vez mais como profissional e principalmente 
                    como pessoa.
                </p>

                <p className="indent-4 lg:w-1/2 sm:w-[70%] tm:m-auto tm:mt-4 tm:text-center">
                    Uma qualidade que gosto sempre de aprimorar cada vez mais é a comunicação, 
                    pois devido a experiencias antigas de trabalho fora da area de programação atuei por um 
                    tempo com diversos tipos de pessoas que me permitiram ter uma confiança maior em minha sociabilidade.
                </p>

            </div>
            
        </section>
    )
}