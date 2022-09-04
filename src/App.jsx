import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Header } from "./components/Header"
import { Introduction } from "./components/Introduction"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"

function App() {

  return (
    <>
    <Header />
    <Introduction />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </>
  )
}

export default App

// Na "experiencias" colocar apenas que a procura de um serviço ( com um cadeado do lado de preferencia )