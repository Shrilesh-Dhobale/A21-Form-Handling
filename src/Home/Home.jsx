import {useState,useEffect} from 'react'
import './Home.css'

function Home() {
    const [name, setName] = useState('');
    const saveName=()=>{
      if(!name){
        alert("Please enter your name");
        return;
      }
      localStorage.setItem("name",name);
      };

    useEffect(()=>{
      const nameFromStorage=localStorage.getItem("name");
      if(nameFromStorage){
        setName(nameFromStorage);
      }
    },[]);

  return (
    <div>
    <h1>Hello {name} </h1>
      <input type="text"
      placeholder="Enter your name"
      className='name-input' 
      onChange={(e)=>{
      setName(e.target.value)
      }}
        value={name}
      />
      <button className="btn" onClick={saveName}>Save</button>
      <button className="btn" 
      onClick={()=>{ 
        setName("")
      }}>Clear</button>
    </div>
  )
}

export default Home
