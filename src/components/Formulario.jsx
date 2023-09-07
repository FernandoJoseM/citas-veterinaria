import { useEffect, useState } from "react";
import Error from "./Error";
const Formulario = ({ pacientes, setPacientes,patient,setPatient }) => {
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);
  
  useEffect(() => {
    if(Object.keys(patient).length>0){
        setMascota(patient.mascota)
        setPropietario(patient.propietario)
        setEmail(patient.email)
        setDate(patient.date)
        setSintomas(patient.sintomas)
    }
  }, [patient])
  

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([mascota, propietario, email, date, sintomas].includes("")) {
      setError(true);
    } else {
      setError(false);
    }

    // objeto de paciente
    const objetoPaciente = {
      mascota,
      propietario,
      email,
      date,
      sintomas
      
    };

    if(patient.id){
        // editando
        objetoPaciente.id=patient.id
        const pacientesActualizados=pacientes.map(element=>element.id===patient.id?objetoPaciente:element)

        setPacientes(pacientesActualizados)
        setPatient({})


    }else{
        // nuevo register
        objetoPaciente.id=generarId()
        setPacientes([...pacientes, objetoPaciente]);
        
    }

    // reinicio formulario
    setMascota("");
    setPropietario("");
    setEmail("");
    setDate("");
    setSintomas("");

    
  };

  return (
    <div className="content-form">
      <h2>Seguimiento Pacientes</h2>
      <p>
        Añade pacientes y <span>Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className="formulario">
        <div>
          {error && <Error />}
          <label htmlFor="mascota">Nombre Mascota</label>
          <input
            type="text"
            id="mascota"
            placeholder="Nombre de la mascota"
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="propietario">nombre propietario</label>
          <input
            type="text"
            id="propietario"
            placeholder="Nombre propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            placeholder="Agrega tu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">alta</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="sintomas">Sintomas</label>
          <textarea
            id="sintomas"
            placeholder="Describe tus sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="btn-submit"
          value={patient.id?'Editar paciente':'Agregar paciente'}
        />
      </form>
    </div>
  );
};

export default Formulario;
