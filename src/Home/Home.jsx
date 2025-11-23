import {useState,useEffect} from 'react'
import './Home.css'

function Home() {
    const [name, setName] = useState('');
    const [error,setError]=useState("");
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

    useEffect(()=>{
      if(name.length<3){
        setError("Name must be at least 3 characters long");
      }
      else{
        setError("");
      }
    },[name]);

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
      <p className='error-msg'>{error}</p>
      <div className='btn-container'>
        <button className="btn" onClick={saveName}>Save</button>
        <button className="btn" 
        onClick={()=>{ 
        setName("")
        }}>Clear</button>
      </div>
    </div>
  )
}

export default Home
