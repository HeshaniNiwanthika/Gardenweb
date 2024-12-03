import './Navbar.css';
import gardenlogo from '../Assets/gardenlogo.png'



const Navbar=()=>{

    return(
        
        <div>
              
            <div className="Nav_Components">
            <img clasname="logo" height="150px" width="150px" src={gardenlogo} alt=""/>
             <h2 className="Navelemnts">Home</h2>
             <h2 className="Navelemnts">About</h2>
             <h2 className="Navelemnts">Contact</h2>
             <h2 className="Navelemnts">Cart</h2>

             

            </div>
        </div>
    )
}
   
export default Navbar