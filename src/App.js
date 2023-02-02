
import './App.css';
import Titulo from './components/Titulos';


function App() {
  return (
    <>
 <Titulo nombre= "diego" apellido= "valencia"/>
 <Titulo nombre= "daniel" apellido= {2}/>
 <Titulo nombre= "valeria" apellido= "fernandez"/>

 </>
  );
}

export default App;
