import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Listclima from "./Listclima";

export const Clima =()=>{
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [clima, setClima] = useState([]);
  const [ciudad, setCiudad] = useState("");

  const Api = async (dato) => {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${dato}&appid=af15a1f65c9200187995c5eabbe99dd8&lang=es`);
    if (response.ok) {
      let data = await response.json();
      let lista = data.list;
      setClima(lista);
    } else {
      alert("Ciudad no encontrada o error en la solicitud.");
    }
  } catch (error) {
    alert("Error en la página o solicitud fallida.");
  }
};

const buscar = (data) => {
  setCiudad(data.ciudad);
};

useEffect(() => {
  if (ciudad) {
    Api(ciudad);
  }
}, [ciudad]);

return (
  <>
    <div className="d-flex justify-content-center flex-column">
      <h1 className="text-center">Escriba el Nombre de su ciudad</h1>
      <div>
        <form onSubmit={handleSubmit(buscar)}>
          <input
            type="text"
            placeholder="Escribe tu ciudad"
            {...register("ciudad", { required: true })}
          />
          {errors.ciudad && <p>Este campo es obligatorio</p>}
          <button className="btn btn-primary" type="submit">Buscar</button>
        </form>
      </div>
    </div>
    <hr />
    {clima.length > 0 ? (
      clima.map((element) => (
        <Listclima
          key={element.dt}
          description={element.weather[0].description}
          tiempo={element.weather[0].main}
        />
      ))
    ) : (
      <p>No se encontraron resultados.</p>
    )}
  </>
);

}