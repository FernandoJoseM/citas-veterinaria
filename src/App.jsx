import { useEffect, useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [patient, setPatient] = useState({})

  useEffect(() => {
    const obtenerLs=()=>{
      const pacientesLs=JSON.parse(localStorage.getItem('pacientes')) ??[]
      setPacientes(pacientesLs)
    }
    obtenerLs()
  }, [])
  

  useEffect(() => {
   localStorage.setItem('pacientes',JSON.stringify(pacientes))
  }, [pacientes])
  


  const eliminarPciente=(id)=>{
    const pacientesActualizados=pacientes.filter(paciente=>paciente.id!==id)
    setPacientes(pacientesActualizados)
  }
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="contianer">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          patient={patient}
          setPatient={setPatient}
        />
        <ListadoPacientes
        pacientes={pacientes}
        setPatient={setPatient}
        eliminarPciente={eliminarPciente}
        />
      </div>
    </>
  );
}

export default App;
