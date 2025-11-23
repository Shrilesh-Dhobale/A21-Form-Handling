import {useState} from 'react'
import './Home.css'

function Home() {
    const [name, setName] = useState('');
  return (
    <div>
    <h1>Hello {name} </h1>
      <input type="text"
      placeholder="Enter your name"
      className='name-input' 
      onChange={(e)=>{
        setName(e.target.value)
      }}/>
    </div>
  )
}

export default Home
