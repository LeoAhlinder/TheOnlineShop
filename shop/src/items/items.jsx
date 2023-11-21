import React from "react";
import "./itemsStyle.css"
import jeans from "../pictures/jeans.jpg"
import orangeHoodie from "../pictures/orange_hoodie.webp"
import yellowBeanie from "../pictures/yellowbeanie.jpg"
import graycap from "../pictures/graycap.png"
import blacktshirt from "../pictures/blacktshirt.jpg"
import seventhisrt from "../pictures/705tshirt.jpg"

const Items = () =>{

    const clothingList = require("./itemsData").clothingList
    return(
        <div className="itemsContainer">
            <ul className="itemGrid">
            <div className="row">
                <div className="column">
                    <img src={graycap}/>
                    <img src={jeans}/>
                    <img src={blacktshirt}/>
                </div>
                <div className="column">
                    <img src={yellowBeanie}/>
                    <img src={orangeHoodie}/>
                    <img src={jeans}/>

                </div>
                <div className="column">
                    <img src={seventhisrt}/>
                    <img src={jeans}/>
                    <img src={jeans}/>
                </div>
                <div className="column">
                    <img src={jeans}/>
                    <img src={jeans}/>
                    <img src={jeans}/>
                </div>
                
                

            </div>

            </ul>
        </div>
    )
}

export default Items;