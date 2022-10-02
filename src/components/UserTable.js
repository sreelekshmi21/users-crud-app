import React, {Component} from 'react'

const UserTable = (props) =>(

  
     
       <table className="table">
         
           <thead className="table-dark">
             <tr>
               <th scope="col">
                  Name
               </th>
               <th scope="col">
                  Username
               </th>
               <th scope="col">
                  Actions
               </th>
             </tr>
           </thead>
           <tbody>

             {props.users.length !== 0 ? (

               props.users.map((user,index) => (

                  <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>
                         <button 
                            type="button"
                            className="btn btn-secondary" 
                            onClick={() => props.editUser(user)}
                            style={{marginRight:10}}>
                                Edit
                         </button>
                        <button 
                            type="button"
                            onClick={() => props.deleteUser(user.id)}
                            className="btn btn-danger">
                             Delete
                        </button>
                      </td>
                  </tr>
               ))
             )
                
            : (<tr>
                 <td colSpan={3}>No Users</td>
              
              </tr>)}
             
           </tbody>
         
       </table>
     
  )


export default UserTable