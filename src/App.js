
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';





function App() {
 
  const [data,setData] = useState([]);

  const [name,setName] = useState('');
  const [age,setAge] = useState(0);




  const handleSubmit = async (e) => {
    
     e.preventDefault();
      try {
         
        const res = await axios.post('https://final5.vercel.app/insert',
        {
          name,
          age
        })
        console.log(res)
       

        setName('');
        setAge(0);

      }catch(e){
        console.log(e)
      }

  }



  return (
    <div>    
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Title"
       
      />
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">submit</button>
    </form>

  
      


    </div>
  );
}

export default App;
