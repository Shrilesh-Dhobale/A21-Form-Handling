import {useState,useEffect} from 'react'
import './Home.css'

function Home() {
    const [formData, setFormData] = useState({ name: '', age: '' , error: ''});
    


    const saveName=()=>{

      if(!name){
        alert("Please enter your name");
        return;
      }
      if(!age){
        alert("Please enter your age");
        return;
      }
      localStorage.setItem("name",name);
      localStorage.setItem("age",age);
      };

    useEffect(()=>{
      const nameFromStorage=localStorage.getItem("name");
      const ageFromStorage=localStorage.getItem("age");
      if(ageFromStorage){
        setFormData({...formData, age: ageFromStorage});
      }
      if(nameFromStorage){
        setFormData({...formData, name: nameFromStorage});
      }
    },[]);


    useEffect(()=>{
      if(name.length<3){
        setError("Name must be at least 3 characters long");
      }
      else if(name.length>20){
        setError("Name must be less than 20 characters long");
      }
      else if(age<18){
        setError("Age must be at least 18");
      }
      else if(age>60){
        setError("Age must be less than 60");
      }
      else{
        setError("");
      }
    },[name,age]);

    

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
     
      <input type="number"
      placeholder="Enter your age"
      className='name-input' 
      onChange={(e)=>{
      setAge(e.target.value)
      }}
        value={age}
      />
       <p className='error-msg'>{error}</p>

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
