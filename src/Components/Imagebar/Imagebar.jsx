import main_picture from '../Assets/main_picture.jpg'
import Decorating_plants from '../Assets/Decoratingplants.jpg'
import flower_plants from '../Assets/flowerplant.jpg'
import medicalplants from '../Assets/medicalplants.jpg'
import '../Imagebar/Imagebar.css'

const Imagebar=()=>{

    return(
        <div>
        <div>
            <img class Name="mainimage" src={main_picture} alt=""/>
        </div>

        <div className="picture_bar">
                    <img className="Decoratingp" src={Decorating_plants} alt=""></img>
                    <img className="flowerp" src={flower_plants} alt=""></img>
                    <img className="medicalp" src={medicalplants} alt=""></img>
        </div>
                    
        <div className="text_bar">
                        <h3>Decoration Plants</h3>
                        <h3>Flower Plants</h3>
                        <h3>Medical Plants</h3>
        </div>
                
        </div>
    )
}
   
export default Imagebar