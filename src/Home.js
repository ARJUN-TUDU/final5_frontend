import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import {BeatLoader} from 'react-spinners'

const Home = () => {

    const [data,setData] = useState([]);
    const [flag,setFlag] = useState(false);

    const [cart,setCart] = useState([]);
    
    const [cartLength,setCartLength] = useState(0);




    const [counter,setCounter] = useState(0);

    const addElement = (x) => {
       setCounter((p)=>{
        return parseInt(x)+p;
       })
       console.log(counter);
    }
    
    const addCart = (x) => {

      setCart((prev)=>{
        return [...prev,x];
      })
      setCartLength((prev)=>{
        return prev+1;
      })

      




    }

    useEffect(()=>{
    
        const setItems = async () => {
          
        
            try{

              const list = await axios.get('http://localhost:5000/');
              
              if(list){

                setFlag(true);

              }

              setData(list.data);
              
            }catch(e){

              console.log("error not found");

            }
      }
      setItems();
           
    
      },[])

  return (
    <div style = {{display:"flex"}}>
    {
      flag ?   <div>
      {
        data.map((x)=>{
          return <h1>{x.name}+{x.age}
          
          <button onClick={(e)=>addElement(x.age)}>add amount</button>
          <button onClick={(e)=>addCart(x.name)}>addCart</button>
          </h1>
        })
      }
      </div> : <BeatLoader color="#36d7b7" />
    }
    
    <h1>cart</h1>
    <ul>
    {cartLength}
    {
      cart.map((x)=>{
        return <li>{x}</li>
      })
    }
   
    </ul>

    <h1 style = {{width:"100px"}}></h1>
    
    <h1>counter =</h1>
    <p></p>
    <div>
      <h1> = {counter}</h1>
    </div>


    </div>
  )
}

export default Home