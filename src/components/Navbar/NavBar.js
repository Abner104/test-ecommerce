import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


const NavBar = () => {
    return(
        <AppBar position="static">
        <Toolbar>
            <ul>
                <li>
                    <button>Home</button>
                </li>
                <li>
                    <button>Product</button>
                </li>
                <li>
                    <button>Home</button>
                </li>
                <li>
                    <button>Home</button>
                </li>
            </ul>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
   
}

export default NavBar;