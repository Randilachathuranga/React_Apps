import { Box } from "@mui/material";
import UserTable from "./UserTable";
import Userform from "./Userform";

const users = [
    {id: 1,
    name: 'randila'},
    {
        id: 2,
        name : 'Chathuranga',
    },{
        id: 3,
        name : 'Bhagya',
    }
];

const Users = () =>{
return(
   <Box>
     <Userform />
     <UserTable rows={users}/>
   </Box>
)
    
}

export default Users;