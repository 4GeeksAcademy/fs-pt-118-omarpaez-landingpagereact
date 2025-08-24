import React from "react";
import Proptypes, { string } from "prop-types"

{/*Este componente permite llenar la card con informacion que recibimos desde Divcards*/}
const Card = (props) => {
    const { id, title, text, urlImg, } = props

    return (
        <div key={id} className="card h-100 card-hover">
            <img src={urlImg} className="card-img-top " alt="..."  ></img>
            <div className="card-body d-flex flex-column text-center ">
                <h5 className="card-title ">{title}</h5>
                <p className="card-text ">{text}</p>
                <a href="#" className="btn btn-primary mt-auto">Find Out More!</a>
            </div>
        </div>
    )
}

Card.propTypes = {
    id: Proptypes.number,
    title: Proptypes.string,
    text: Proptypes.string,
    urlImg: Proptypes.string
}
export default Card