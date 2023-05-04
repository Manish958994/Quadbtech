import React, { useEffect , useState } from 'react'
import Details from './Details'
import {  useNavigate } from 'react-router-dom'
import AllRoutes from './AllRoutes'

const Home = () => {

    const [apiData , setApiData] = useState([])
    const navigate = useNavigate()
const getdata = async()=>{
    try {
        const res= await fetch(`https://api.tvmaze.com/search/shows?q=all`)
        const data = await res.json()
        console.log(data)
        setApiData(data)
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
    getdata()
},[])


const handleclick = (id,name,summary,runtime,type)=>{

console.log(id,name)
 navigate("/details",{state : {id,name,summary,runtime,type} })
}

  return (
    <div>
     <h1>Quadb Tech Assignment</h1>


{
  apiData?.map((e)=>(

    <div className='dataShow' key={e.show.id} style={{border:"2px solid" , width:"30%",margin:'auto',marginTop:'50px',paddingBottom:'30px'}}>
<h1>{e.show.name}</h1>
<p>ID - {e.show.id}</p>
<p>Language - {e.show.language}</p>
<p>Status - {e.show.status}</p>
<img src={e.show.image?.medium} alt={e.show.name} />
<br />
<button  onClick={()=>handleclick(e.show.id,e.show.name,e.show.summary,e.show.runtime,e.show.type)} style={{padding:"10px" , marginTop:'20px',background:'teal' , color:'white',borderRadius:'9px',fontSize:'18px' }} >Summary</button>
    </div>
  ))

}

    </div>
  )
}

export default Home