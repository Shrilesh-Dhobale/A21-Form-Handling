import {useState,useEffect} from 'react'
import './Home.css'

function Home() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
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
      else if(name.length>20){
        setError("Name must be less than 20 characters long");
      }
      else{
        setError("");
      }
    },[name]);

  return (
    <div>
    <div className='home-container'>
    <h1>Hello {name} </h1>
    <p>Your age is {age ? age : "unknown"}</p>
      <input type="text"
      placeholder="Enter your name"
      className='name-input' 
      onChange={(e)=>{
      setName(e.target.value)
      }}
        value={name}
      />
      <p className='error-msg'>{error}</p>
      <input type="number"
      placeholder="Enter your age"
      className='name-input' 
      onChange={(e)=>{
      setAge(e.target.value)
      }}
        value={age}
      />
      <div className='btn-container'>
        <button className={`btn ${error ? 'disabled' : null}`} 
        onClick={saveName}
        >Save</button>
        
        <button className="btn" 
        onClick={()=>{ 
        setName("")
        setAge("")
        localStorage.clear()
        setError("")
        }}>Clear</button>
      </div>
    </div>
      
    </div>
  )
}

export default Home
