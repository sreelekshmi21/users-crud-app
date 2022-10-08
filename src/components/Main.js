
import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import AddUser from './AddUser';
import EditUser from './EditUser';
import UserTable from './UserTable';


const Main = () =>{

  const userData = [
    {
    id:1,  
    code:'XYZ',
    name: 'Tania',
    username:'Racsia'
    },
    {
      id:2,
      code:'SSS',
      name: 'Flowers',
      username:'lavendar'
    },
    {
      id:3,
      code: 'GGG',
      name: 'Poppy',
      username:'hope4'
    },
    {
      id:4,
      code: 'CCC',
      name: 'Haidi',
      username:'reflects'
    },
    {
      id:5,
      code:'TUTU',
      name: 'Peter',
      username:'rhino'
    }
  ]

  const [users,setUsers] = useState(userData)
  const [edit, setEdit] = useState(false)
  const initialUser = {
    id: null,
    code:'',
    name:'',
    username:''
  }
  const [currentUser,setCurrentUser] = useState(initialUser)



  const handleAddUser = (newUser) =>{
    console.log('in handle add user',newUser)
    newUser.id = users.length + 1
    console.log(newUser)
    setUsers([...users,newUser])
  }



  const handleEditUser = (currUser) =>{
    console.log('curr user',currUser)
    setEdit(true)
    setCurrentUser({
      id: currUser.id,
      code: currUser.code,
      name: currUser.name,
      username: currUser.username
    })
  }



  const handleUpdateUser = (userId,updatedUser) =>{
      console.log('in handle update',userId,updatedUser)
      setEdit(false)
      setUsers(
        users.map((user) => ((user.id === userId) ? updatedUser : user))
      )
  }



  const handleDeleteUser = (userId) =>{
     console.log('in del user',userId)
     setEdit(false)
     setUsers(users.filter((user) => user.id !== userId))
  }



  return (
    <>
    <div className="row">
           <div className="col-md-5">
             {edit ? (                 
                  <EditUser setEdit={setEdit} 
                            updateUser={handleUpdateUser}
                            currentUser={currentUser}/>
                )
              : (<AddUser addUser={handleAddUser}/>) 
            
            }
          </div>
           <div className="col-md-7">
              <h2>View Users</h2>
              <UserTable users={users}
                         editUser={handleEditUser} 
                         deleteUser={handleDeleteUser}
              />
           </div>
        </div>
        <div className="text-center">
            <Link to='/products'
                    className="btn btn-success"
            >Go To Restaurant</Link>
        </div>
   
    </>        
  );    
}
export default Main

  
  

  
  



