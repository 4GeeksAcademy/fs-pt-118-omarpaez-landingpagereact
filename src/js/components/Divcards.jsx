import React from "react";
import Card from "./Card";




const arrInfoCard = [
    {
        title: "Explora la Naturaleza",
        text: "Un sendero rodeado de montañas y bosques para los amantes de la aventura.",
        urlImg: "https://picsum.photos/id/1018/500/326"
    },
    {
        title: "El Mejor Amigo",
        text: "Un perro listo para acompañarte en cada momento de tu vida.",
        urlImg: "https://picsum.photos/id/1025/500/326"
    },
    {
        title: "La Ciudad que Nunca Duerme",
        text: "Luces y rascacielos que muestran la energía de la vida urbana.",
        urlImg: "https://picsum.photos/id/223/500/326"
    },
    {
        title: "Un Momento de Tranquilidad",
        text: "La serenidad en la mirada de un perro que invita a relajarse.",
        urlImg: "https://picsum.photos/id/237/500/326"
    }

];



const DivCards = () => {

    return (
        <div className="container text-center py-4">
            <div className="row row-cols-1 row-cols-md-4 g-4 align-items-stretch">
                {/*map para generar una card por cada elemento que contenga el array */}
                {arrInfoCard.map((el, index) => (
                    <div className="col-sm-12 col-md-3 mb-4 d-flex ">
                        <Card id={index} title={el.title} text={el.text} urlImg={el.urlImg} />
                    </div>
                ))}
            </div>
        </div>
    );
};


export default DivCards