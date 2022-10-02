import React, {useState} from 'react'

const Tes = () =>{
  
    const [values,setValues] = useState({
      company:{
        name: 'sss',
        address: 'ttt'
      }
    })
    
    const handleChange = (e) =>{
      console.log('in handle----chng-----------',e.target.name,e.target.value)
        setValues({
          ...values.company,
          [e.target.name] : e.target.value
          
        })
    }
    
    
    return (
      <div>
      
        <p>
          Ganu: 
          <input type="text" name="name" value={values.company.name}
            onChange={handleChange}
            />
           Address: 
          <input type="text" name="address" value={values.company.address}
             onChange={handleChange}
            />
        
        </p>
      </div>
    )
  }
  export default Tes