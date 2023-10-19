import React from "react";
import "./itemsStyle.css"

const Items = () =>{

    const clothingList = require("./itemsData").clothingList

    console.log(clothingList)

    return(
        <div className="itemsContainer">
            <ul className="itemGrid" >
                    <li className="gridItem">test</li>
                    <li className="gridItem">test</li>
                    <li className="gridItem">test</li>
                    <li className="gridItem">test</li>
                    <li className="gridItem">test</li>
                    <li className="gridItem">test</li>
                    <li className="gridItem">test</li>
                    <li className="gridItem">test</li>
                    <li className="gridItem">test</li>
                    <li className="gridItem">test</li>

            </ul>
            {/* {clothingList.map((item,index) =>(
                <ul className="itemGrid" key={index}>
                    <li className="gridItem">{item.Type}</li>
                </ul>
            ))} */}
        </div>
    )
}

export default Items;