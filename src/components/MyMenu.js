import { Menu } from 'react-admin';
import LabelIcon from '@mui/icons-material/Label';
import {Link} from 'react-router-dom'

export const MyMenu = () => (
    <Menu>
        <div>
             <Link to='/users-list'
                    
            >USERS</Link>
        </div>
        <div>
             <Link to='/posts'
                    
            >POSTS</Link>
        </div>
    </Menu>
);