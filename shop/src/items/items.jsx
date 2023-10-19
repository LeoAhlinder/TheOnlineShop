import React from "react";
import "./itemsStyle.css"
import pic from "../pictures/test.webp"

const Items = () =>{

    const clothingList = require("./itemsData").clothingList

    console.log(clothingList)

    return(
        <div className="itemsContainer">
            <ul className="itemGrid" >
                    <li className="gridItem">
                        <div className="book">
                            <img src={pic} className="bookCover" />
                        </div>
                    </li>
                    <li className="gridItem"><div className="book">
                            <img src={pic} className="bookCover" />
                        </div></li>
                    <li className="gridItem"><div className="book">
                            <img src={pic} className="bookCover" />
                        </div></li>
                    <li className="gridItem"><div className="book">
                            <img src={pic} className="bookCover" />
                        </div></li>
                    <li className="gridItem"><div className="book">
                            <img src={pic} className="bookCover" />
                        </div></li>
                    <li className="gridItem"><div className="book">
                            <img src={pic} className="bookCover" />
                        </div></li>
                    <li className="gridItem"><div className="book">
                            <img src={pic} className="bookCover" />
                        </div></li>
                    <li className="gridItem"><div className="book">
                            <img src={pic} className="bookCover" />
                        </div></li>
                    <li className="gridItem"><div className="book">
                            <img src={pic} className="bookCover" />
                        </div></li>
                    <li className="gridItem"><div className="book">
                            <img src={pic} className="bookCover" />
                        </div></li>

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