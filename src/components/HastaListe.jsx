import React from 'react'
import { FaTimesCircle } from "react-icons/fa";

const HastaListe = ({hastalar,setHastalar,doktorlar}) => {
  return (
    <div>
      {hastalar.map((patient)=>(
        <div key={patient.id}>
        {doktorlar.map((a)=>(a.doctorName===patient.myDoctor  && (<div key={a.id}  className={patient.isDone ? "trueBittiStil" : "falseBitmediStil"} 
        onDoubleClick={()=>setHastalar(hastalar.map((hst)=>hst.id===patient.id ? {...hst,isDone:!hst.isDone} :hst ))}>
        <div className=''>
        <h2>{patient.text}</h2>
    <h4>{patient.day}</h4>
    <h3>{patient.myDoctor}</h3></div>

    <FaTimesCircle style={{color:"red"}}  
              onClick={()=>setHastalar(hastalar.filter((a)=>a.id!==patient.id))}
            />

        </div> )   ))}
        
        </div>
      ))}
    </div>
  )
}

export default HastaListe