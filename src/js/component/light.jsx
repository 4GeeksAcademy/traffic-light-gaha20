import React, {useState} from "react";


const Light = () => {
    //Estados
    const [color, setColor]= useState("");
    //const handleLight={setColor}
    //Fin Estados
    return(
        <div className="traffic-light bg-dark container flex-direction-column">
            
            <div className={`red-light bg-danger ${
                color=="red" ? "shadows" : ""  
            }`} onClick={(event)=>{
                console.log("Red")
                setColor((prev) => {
                    if (prev == "red"){
                        return "";
                    }
                    return "red"
                })
            }}>
            </div>
            <div className={`yellow-light bg-warning ${
                color=="yellow" ? "shadows" : ""  
            }`} onClick={(event)=>{
                console.log("Yellow")
                setColor((prev) => {
                    if (prev == "yellow"){
                        return "";
                    }
                    return "yellow"
                })
            }}>
            </div>
            <div className={`green-light bg-success ${
                color=="green" ? "shadows" : ""  
            }`} onClick={(event)=> {
                console.log("green")
                setColor((prev) => {
                    if (prev == "green"){
                        return "";
                    }
                    return "green"
                })
            }}>
            </div>
        </div>
    )
}
export default Light;