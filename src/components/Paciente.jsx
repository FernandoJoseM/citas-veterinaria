const Paciente = ({ el,setPatient,eliminarPciente }) => {
  
  const { mascota, propietario, email, date, sintomas,id } = el;

  const handleDelete=()=>{
   const res= confirm('Seguro desea eliminar')
    if(res){
      eliminarPciente(id)
    }
    
  }
  return (
    <div className="content-paciente">
      <p>
        Nombre: <span>{mascota}</span>
      </p>
      <p>
        Propietario: <span>{propietario}</span>
      </p>
      <p>
        Email: <span>{email}</span>
      </p>
      <p>
        Fecha Alta: <span>{date}</span>
      </p>
      <p>
        Sintomas: <span>{sintomas}</span>
      </p>
      <div className="pacientes-btn">
        <button onClick={()=>setPatient(el)}>Editar</button>
        <button onClick={handleDelete} className="btn-red">Eliminar</button>
      </div>
    </div>
  );
};

export default Paciente;
