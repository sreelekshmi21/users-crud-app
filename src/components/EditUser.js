import React,{useState,useEffect} from 'react'

const EditUser = (props) =>{

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user,setUser] = useState(props.currentUser)
    
    const handleChange = (e) =>{
        console.log('in update values')
        const {name,value} = e.target

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e) =>{
      
        e.preventDefault()
        console.log('in update submit')

        props.updateUser(user.id, user)
       
    }

    const handleCancelUser = () =>{

        console.log('in cancel user')

        props.setEdit(false)
    }
    return (
        <div>     
            <h2>Edit User</h2>                 
            <form onSubmit={handleSubmit}>
                <div className="row">
                 <div className="form-group">
                    <label>User Code</label>
                    <input type="text"
                           name="code" 
                           value={user.code === ''?'':user.code}
                           required
                           className="form-control" 
                           onChange={handleChange}
                           placeholder="UserCode"/>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text"
                           name="name" 
                           required
                           value={user.name === ''?'':user.name}
                           className="form-control" 
                           onChange={handleChange}
                          placeholder="Name"/>
                </div>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" 
                           name="username"
                           value={user.username === ''?'':user.username}
                           required
                           onChange={handleChange}
                         className="form-control" 
                         placeholder="Username"/>
                 </div>
              </div>
          <div className="text-center form-btn" style={{
                                                    marginTop:10,
                                                    marginBottom:50}}>
            <button type="submit" className="btn btn-primary">
                Update
            </button>
            <button 
                    type="button"
                    onClick={handleCancelUser} 
                    style={{marginLeft:10}}
                    className="btn btn-outline-secondary">
                Cancel
            </button>
          </div>
      </form>
    </div>  
            
        
    )
}

export default EditUser
