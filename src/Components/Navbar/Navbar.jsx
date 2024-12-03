import './Navbar.css';
import gardenlogo from '../Assets/gardenlogo.png'
import {Link} from 'react-router-dom'



const Navbar=()=>{

    return(
        
        <div>
              
            <div className="Nav_Components">
            <img clasname="logo" height="150px" width="150px" src={gardenlogo} alt=""/>
             <Link to="/"><h2 className="Navelemnts">Home</h2></Link>
             <Link to="/About"><h2 className="Navelemnts">About</h2></Link>
             <Link to="/Contact"><h2 className="Navelemnts">Contact</h2></Link>
             <h2 className="Navelemnts">Cart</h2>

             

            </div>
        </div>
    )
}
   
export default Navbar