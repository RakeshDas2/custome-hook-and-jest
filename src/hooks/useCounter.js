import React, { useState } from 'react';

 const useCounter = (initialValue,val) => {
    const [count,setCount]=useState(initialValue)
    const increment=(value)=>{
        if(!isNaN(value)){
            setCount(count+val+value)
        }else{
            setCount(count+val)
        }
    }
    const decrement=(value)=>{
        if(!isNaN(value)){
            setCount(count-val-value)
        }else{
            setCount(count-val)
        }
    }
    const reset=()=>{
       setCount(initialValue)
    }
   
  return [count,increment,decrement,reset]
    
}
export default useCounter
