import React from "react";
import "./itemsStyle.css"
import jeans from "../pictures/jeans.jpg"
import orangeHoodie from "../pictures/orange_hoodie.jpg"

const Items = () =>{

    const clothingList = require("./itemsData").clothingList

    console.log(clothingList)

    return(
        <div className="itemsContainer">
            <ul className="itemGrid" >
                    <li className="gridItemBig">
                        <div className="book">
                            <img src={jeans} className="pic" alt="" />
                        </div>
                    </li>
   
                    <li className="gridItemBig">
                        <div className="book">
                        <img src={orangeHoodie} className="pic" alt="" />

                        </div>
                    </li>
                    <li className="gridItemSmall">
                        <div className="book">
                            
                        </div>
                    </li>
                    <li className="gridItemSmall">
                        <div className="book">
                            
                        </div>
                    </li>
                    <li className="gridItemSmall">
                        <div className="book">
                            
                        </div>
                    </li>
                    <li className="gridItemSmall">
                        <div className="book">
                            
                        </div>
                    </li>
                    <li className="gridItemSmall">
                        <div className="book">
                            
                        </div>
                    </li>
                    <li className="gridItemSmall">
                        <div className="book">
                            
                        </div>
                    </li>
                    <li className="gridItemSmall">
                        <div className="book">
                            
                        </div>
                    </li>
                    

            </ul>
            {/* {clothingList.map((item,index) =>(
                <ul className="itemGrid" key={index}>
                    <li className="gridItemSmall">{item.Type}</li>
                </ul>
            ))} */}
        </div>
    )
}

export default Items;