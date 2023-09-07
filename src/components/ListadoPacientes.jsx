import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPatient,eliminarPciente }) => {
  return (
    <div className="content-listado">
      {pacientes && pacientes.length ? (
        <>
          <h2>Listado de pacientes</h2>
          <p>
            Administras tus <span className="pacientes">Pacientes y citas</span>
          </p>
          {pacientes.map((el) => (
            <Paciente key={el.id} el={el} setPatient={setPatient} eliminarPciente={eliminarPciente} />
          ))}
        </>
      ) : (
        <>
          <h2>No hay pacientes</h2>
          <p>
            Comienza agregando pacientes<span className="pacientes"> y apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
