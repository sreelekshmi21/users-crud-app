import React,{useState} from 'react'

const AddUser = (props) =>{

    const initialUser = {
        id: null,
        code:'',
        name:'',
        username:''
    }
    const [user,setUser] = useState(initialUser)

    const handleChange = (e) =>{

        console.log(e.target.value)

        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) =>{

        e.preventDefault()
        console.log('in submit')

        
        
        props.addUser(user)

        setUser(initialUser)


    }
    return (
        <div>     
            <h2>Add User</h2>                 
            <form onSubmit={handleSubmit}>
                <div className="row">
                 <div className="form-group">
                    <label>User Code</label>
                    <input type="text"
                           name="code" 
                           onChange={handleChange}
                           required
                           className="form-control" 
                           value={user.code === '' ? '' : user.code}
                           placeholder="UserID"/>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text"
                           name="name" 
                           required
                           onChange={handleChange}
                           className="form-control" 
                           value={user.name === '' ? '' : user.name}
                          placeholder="Name"/>
                </div>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" 
                           name="username"
                           onChange={handleChange}
                           required
                           value={user.username === '' ? '' : user.username}
                         className="form-control" 
                         placeholder="Username"/>
                 </div>
              </div>
          <div className="text-center form-btn" style={{
                                                    marginTop:10,
                                                    marginBottom:50}}>
            <button type="submit" className="btn btn-primary">
                Add
            </button>
          </div>
      </form>
    </div>  
            
        
    )
}

export default AddUser
