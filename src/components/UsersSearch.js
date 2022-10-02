// import React,{useState, useEffect} from 'react';
// import axios from 'axios'
// import {Stack} from "@mui/material";
// import { Autocomplete, TextField } from '@mui/material';


// export const UsersSearch = props => {
  
  
//   const [data, setData] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   // const skills = [{
//   //   id: 1,
//   //   label: 'HTML'
//   // }]


  
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(
//         'https://jsonplaceholder.typicode.com/users',
//       );
//       const res = formatData(result?.data);
//       setData(res)
       
//     };
//     fetchData();
//   }, []);


//    console.log("#RES",data);

//    const handleChangeUser = (newValue) =>{
//     console.log("#RES handleChangeUser",newValue);
//     setSelectedUser(newValue)
//    }


//      return (
//     <>
   
    
    
          
//        <Stack spacing={2} width="250px">
//        <Autocomplete 
//        options={data}
//        renderInput={(params) => <TextField {...params} label="Skills" variant="outlined" />}
//        getOptionLabel={option => option.label}
//        value={selectedUser}
//        onChange={(e) => handleChangeUser(e)}
//        />
//     </Stack>  
// </>
// );}
import React,{useState, useEffect} from 'react';
import axios from 'axios'
import {Stack} from "@mui/material";
import { Autocomplete, TextField } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { getValuesFromRecords } from 'react-admin';
import AsyncSelect from 'react-select/async'

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function UsersSearch() {
  const skills = ['HTML','CSS','JS','REACT','SSS','XXX','CCC','ZZZ','MMM','NNN']

  const ss = skills?.map((i,index) => ({
        label: i,
        value: index     
      }))
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [choice, setChoice] = useState(null)
  const [value, setValue] = useState(null);
  // const [selData, setSelData] = useState([])
  const [open, setOpen] = React.useState(false);
  const loading = open && data.length === 0;
   

    const formatData = (data) => {
      console.log('#',data)
    const dt  = data?.map((obj, index) => {  
       return {
        label: obj?.name ? obj?.name : obj?.title,
        id: obj?.id
       }
    });
    return dt
  };


    useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/users',
      );
      const res = formatData(result?.data);
      setData(res)
       
    };
    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    console.log('#',newValue)
    setSelectedUser(newValue?.id);
  };
  

  const onInputChange = (inputValue, {action}) => {
    console.log('#',action,inputValue) 
    if (action === "input-change" && inputValue?.length > 3) {
      setValue(inputValue);
    }
  };
 
    const getRow = async (choice) => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/posts/2`,
      );
      console.log('#RES===',result)
      const ft = formatData([result?.data])
       return ft
    }


  useEffect(() => {
    console.log('#choice',choice)
    if(choice?.length > 3){ 
      let st = getRow(2)
      setData(st)
    }
    else setData(ss)

  }, [choice])
  

  // console.log('#',selectedUser,choice)

  const loadOptions = async (inputText,callback) =>{
    console.log('#loadOptions',inputText)
    if(inputText?.length > 3){
    const result = await axios(
      `https://jsonplaceholder.typicode.com/users`,
    );
    console.log('#RES===',result)
    callback(result?.data?.map((i) => ({
      label: i?.name,
      value: i?.id      
    })))
  }
  // else{
  //   callback(skills?.map((i,index) => ({
  //     label: i,
  //     value: index     
  //   })))
  // }
  }

  const sleep = () => {
    Promise.resolve(data).then((data) => console.log(data));
    return data
  };


  return (
    <>
    {console.log('#OPTION',data)}
    {/* <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      // isOptionEqualToValue={(option, value) => option.label === value.label}
      getOptionLabel={(option) => option.label}
      // options={data}open={open}
      options={!data ? sleep() :data}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Asynchronous"
          onChange={(e) => setChoice(e.target.value)}
        />
      )}
      onChange={handleChange}
    /> */}
    <AsyncSelect
    //  isMulti
     defaultOptions={ss}
     value={selectedUser}
     onChange={handleChange}
     placeholder={'Type something....'}
     loadOptions={loadOptions}
    //  controlShouldRenderValue={false}
    //  closeMenuOnSelect={false}
     onInputChange={onInputChange}
     hideSelectedOptions={false}
    />
    </>
  );
}

