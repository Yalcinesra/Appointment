import React, { useState } from "react";
import HastaEkle from "../components/HastaEkle";
import HastaListe from "../components/HastaListe";
import { doctorData, hastaData } from "../helper/Data";
const Home = () => {
  const [hastalar, setHastalar] = useState(hastaData);
  const [doktorlar, setDoktorlar] = useState(doctorData);
const [tikla,setTikla]=useState(true)
const doctorClick=(abc)=>{
  setTikla(!tikla)
  setDoktorlar(tikla ? doktorlar.filter((i)=>i.id===abc): doctorData)
}
  return (
    <div style={{display:tikla ? "block" :"flex"}}>
      <div>
        <header className="header">
          <h1>HOSPITAL</h1>

          <div className="dr">
            {doktorlar.map((dr) => (
              <div key={dr.id}>
                <img
                onClick={()=>doctorClick(dr.id)} 
                 src={dr.doctorImg} alt="" width="180px" height="150px" className="btn" style={{backgroundColor: tikla ? "aqua" :"lightgreen"}}/>

                <h4  style={{backgroundColor: tikla ? "aqua" :"lightgreen", borderLeft:`10px solid ${tikla ? "blue":"green"}`}} >{dr.doctorName} </h4>
              </div>
            ))}
          </div>
        </header>
        {!tikla && <HastaEkle doktorlar={doktorlar}  hastalar={hastalar} setHastalar={setHastalar}/> }



      </div>
<HastaListe hastalar={hastalar} setHastalar={setHastalar} doktorlar={doktorlar}  />

    </div>
  );
};

export default Home;






