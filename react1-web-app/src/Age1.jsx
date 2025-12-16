import { useState } from 'react'
function Age1 (){


     const [age,setAge] = useState(20)

     function add(){
      
    setAge(age+1)
  }
    function subtract(){
    setAge(age-1)
  }
    return(
        <>
        <h2>อายุ ={age}</h2>
  <button onClick={add}> เพิ่ม </button>
  <button onClick={subtract}>ลด</button>
  </>
      

    )
}

export default Age1