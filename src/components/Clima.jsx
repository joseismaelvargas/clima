import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Listclima from "./Listclima";

export const Clima =()=>{
    
  const { register, handleSubmit ,formState:{errors}} = useForm();
    const [clima,setclima]=useState([])

    const Api= async (data)=>{
     try{ 
   
      const api=await fetch`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=af15a1f65c9200187995c5eabbe99dd8&lang=es&q=Bueno Aires`
       console.log(api)
      if( api.status){
        let leer=await api.json()
        let lista=leer.list
        console.log(lista)
        setclima(lista)
       
      }else{
        alert("error")
      }
        
      
      
     }catch{
        alert("Error de pagina")
     }
    }
    const buscar=(e,data)=>{

     e.preventDefault()
     console.log("tet")

    }
    useEffect(()=>{
        Api()
    },[])
    
    
    console.log(clima)
    return( 
   <>
   <div className="d-flex justify-content-center flex-column">
    <h1 className="text-center">Escriba el Nombre de su ciudad</h1>
    <div>
 <form action="" onSubmit={handleSubmit(buscar)}>
        <input type="text" placeholder="text" name="ciudad" {...register("ciudad")}/>
        <button className="btn btn-primary" type="Submit"> Buscar</button>
    </form>
    </div>
    
   
   </div>
   <hr />
   {
    clima.map((element)=>(
      <Listclima key={element.weather.id} description={element.weather[0].description}></Listclima>
    ))
   }   
  
   </>
    )
}