import React, {Component} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Edit, DeleteOutline} from '@material-ui/icons';

class TableComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
        }
    }

    handleEdit = (e,itemId) =>{

        this.props.handleRowEdit(itemId)
    
    }

    handleDelete = (e,itemId) =>{

        this.props.handleRowDelete(itemId)
    
    }

    render(){

        const {data} = this.props

        return(
        <>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                 <TableRow>
                     <TableCell>ID</TableCell>
                     <TableCell>Name</TableCell>
                     <TableCell>Price</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
            <TableBody>
               {data.map((item,index) => (

                <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>
                      <span>
                         <button 
                            type="button" 
                            onClick={(e) => this.handleEdit(e,item.id)}>
                               <Edit />
                        </button>
                     </span>
                     <span>
                        <button 
                           type="button" 
                           onClick={(e) => this.handleDelete(e,item.id)}>
                            <DeleteOutline />
                        </button>
                     </span>
                   </TableCell>
                </TableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    )
  }
}
export default TableComponent