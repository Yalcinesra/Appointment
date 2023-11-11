import React, { useState } from 'react'

const HastaEkle = ({hastalar,setHastalar,doktorlar}) => {
  const[patientName,setName]=useState("")
  const[tarih,setTarih]=useState("")
  const handleSubmiT=(e)=>{
    e.preventDefault();
    
    setHastalar([...hastalar,{id:hastalar.length+1, text:patientName, day:tarih, isDone:false, myDoctor:doktorlar[0].doctorName}])
    setName("")
    setTarih("")

  } 
  return (
    <div>
<form onSubmit={handleSubmiT}>
  <div className='form-control'>
    <label htmlFor="text">Hasta Bilgileri</label>
    <input type="text" id="text" value={patientName}
      onChange={(e)=>setName(e.target.value)}
    />
  </div>
  <div className='form-control'>
    <label htmlFor="day">Day $ Time</label>
  <input type="datetime-local" id="day" value={tarih}
     onChange={(e)=>setTarih(e.target.value)}
  />
  </div>
  <div>
    <button className='dok' type="submit">
      <span style={{ color: "#6a0707" }}>{doktorlar[0].doctorName}</span> icin kayit olustur
    </button>
  </div>
</form>

    </div>
  )
}

export default HastaEkle