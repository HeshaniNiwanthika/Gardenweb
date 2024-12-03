import newmain from '../Assets/newmain.jpg'
import Decorating_plants from '../Assets/Decoratingplants.jpg'
import flower_plants from '../Assets/flowerplant.jpg'
import medicalplants from '../Assets/medicalplants.jpg'
import '../Imagebar/Imagebar.css'

const Imagebar=()=>{
   
    return(
        <div>
        <div className="mainimagediv">
            <img class Name="mainimage" width="100%" src={newmain} alt=""/>
        </div>

        <div className="picture_bar">
                    <div className='button_image'>
                        <img className="Decoratingp" src={Decorating_plants} alt=""></img>
                        <button className="button_btn"><h3>Decoration Plants</h3></button> 
                    </div>
                    <div className='button_image'>
                    <img className="flowerp" src={flower_plants} alt=""></img>
                    <button className="button_btn"><h3>FlowerPlants</h3></button> 
                    </div>
                    
                    <div className='button_image'>
                    <img className="medicalp" src={medicalplants} alt=""></img>
                    <button className="button_btn"><h3>FlowerPlants</h3></button> 
                    </div>

        </div>
                    
        
                
        </div>
    )
}


export default Imagebar