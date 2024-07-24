import './App.css'
import NavBarH from './common/NavBar/NavBarH'
import Componente1 from './components/Componente1'
import Padre from './components/Padre'

function App() {
  return (
    <>
      <NavBarH />
      <h1 className='myClass'>Componente App</h1>
      <Componente1 />
      <Padre />

    </>
  )
}

export default App
