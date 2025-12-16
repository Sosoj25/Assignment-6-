import { useState } from 'react'
function Data1 (){
    const [data,setdata] = useState([
        {id:1,name:"เฮง",gender:"ชาย"},
        {id:2,name:"เสก",gender:"ชาย"}
      ])
      const [show,setShow] = useState(true)
    return(
        <>
       <h1> จำนวนประขากร {data.length}</h1>
  <button onClick={()=>setShow(!show)}>{show? "ซ่อน" : "เเสดง"}</button>
  <ul>
    {show && data.map((item) => (
      <li key={item.id}> {item.id} | {item.name} | {item.gender}</li>
    ))}
    
  </ul>
  </>
    )
}

export default Data1