import React from "react";
import Jumbotrom from "./Jumbotrom";
import DivCards from "./Divcards";

const Container = () =>{
    return (
        <div className="container flex-grow-1"> {/*contenedor del Jumbotrom y el div de las cards*/}
           <Jumbotrom/> 
           <DivCards/>
        </div>
    )
}


export default Container