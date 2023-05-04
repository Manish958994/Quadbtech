import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {Modal,ModalHeader} from "reactstrap"
const Details = () => {

    const [modal,setModal] = useState(false)

const location = useLocation()
  console.log(location.state)
  const BookMovie= ()=>{
    alert("Your Booking is successully done.")
  }
    return (
    <div style={{width:'70%',margin:'auto'}}>
        <h1>{location.state.name}</h1>
<p>{location.state.summary}</p>
      <br/>
      <br/>
   
      <button className='modalBtn' style={{backgroundColor:"teal",colo:"white" ,fontSize:'20px',padding:'10px',color:"white",borderRadius:'15px'}} onClick={()=>setModal(true)}>Book Movie Ticket</button>
   
   <br />
   <br />
   <br />
   {modal ?  <div className='dataShow' style={{border:'2px solid ',padding:'20px',width:'30%',margin:'auto'}}>
    <label >Movie Name</label>
<input type="text" name="" id="" value={location.state.name} />
<br />
<label >Runtime </label>
<input type="text" value={location.state.runtime} />

<br />
<label htmlFor="">Type</label>
<input type="text" name="" id="" value={location.state.type} />
<br />
<label htmlFor="">Price</label>
<input type="text" name="" id="" value='$99' />
<br />
<br />
<button style={{background:'blue', color:'white',width:'70%',padding:'6px',fontSize:'20px',borderRadius:'15px'}} onClick={BookMovie}>Book</button>

</div> : !modal}
  
    </div>
  )
}

export default Details