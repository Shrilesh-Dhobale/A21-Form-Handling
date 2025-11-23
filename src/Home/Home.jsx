import {useState,useEffect} from 'react'
import './Home.css'

function Home() {
    const [formData, setFormData] = useState({
      name: '',
      age: '',
      city: '',
      gender: '',
      subjects: []
    });
    const [error, setError] = useState('');
    
    

    useEffect(()=>{
      const storedData=localStorage.getItem('userData');
      if(storedData){
        const parsedData=JSON.parse(storedData);
        setFormData({
          name:parsedData.name || '',
          age:parsedData.age || '',
      })
      setError('')
      }
    }, []);

    useEffect(()=>{
      if(formData.name.length < 3){
        setError("Name must be at least 3 characters long");
      }
      else if(formData.name.length > 20){
        setError("Name must be less than 20 characters long");
      }
      else if(formData.age && formData.age < 18){
        setError("Age must be at least 18");
      }
      else if(formData.age && formData.age > 60){
        setError("Age must be less than 60");
      }
      else{
        setError("");
      }
    }, [formData.name, formData.age]);

    const saveName = () => {
      if(formData.error){
        alert("Please fix the errors before saving.");
        return;
      }
      localStorage.setItem('userData', JSON.stringify(formData));
    
    };

  return (
    <div>
      <div className='home-container'>
        <h1>Hello {formData.name} </h1>
        <p>Your age is {formData.age ? formData.age : "unknown"}</p>
        <input type="text"
          placeholder="Enter your name"
          className='name-input' 
          onChange={(e)=>{
            setFormData({...formData, name: e.target.value})
          }}
          value={formData.name}
        />
      
        <input type="number"
          placeholder="Enter your age"
          className='name-input' 
          onChange={(e)=>{
            setFormData({...formData, age: e.target.value})
          }}
          value={formData.age}
        />
        <p className='error-msg'>{error}</p>
        <div>
          <select
           onChange={(e)=>{
              setFormData({...formData, city: e.target.value})
            }}
            value={formData.city}
            className='name-input'>
            <option value="">Select City</option>
            <option value="Ngpr">Nagpur</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Hyd">Hyderabad</option>
          </select>
        </div>
        <div className='gender-radio'>
          <input type="radio" value="Male"
          name="gender" 
          checked={formData.gender === "Male"} 
          onChange ={(e)=>{
            setFormData({...formData, gender: e.target.value})
          }}
          /> Male
          <input type="radio" value="Female"
          name="gender"
          checked={formData.gender === "Female"}
          onChange ={(e)=>{
            setFormData({...formData, gender: e.target.value})
          }}
          />Female
        </div>
        <div>
          <p>Choose optional subject:</p>
          <input type="checkbox"
           name="subject" 
           value="Maths"/>Maths
          <input type="checkbox"
            name="subject"
            value="Science"/>Science
          <input type="checkbox"
            name="subject"
            value="History"/>History
        </div>
        <div className='btn-container'>
          <button className={`btn ${error ? 'disabled' : ''}`} 
            onClick={saveName}
            disabled={!!error}
          >Save</button>
          
          <button className="btn" 
            onClick={()=>{
              setFormData({ name: '', age: '', city: '', gender: '',subjects: []});
              setError('');
              localStorage.clear();
           }}>Clear</button>
        </div>
      </div>
    </div>
  )
}

export default Home
