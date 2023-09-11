import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPersonBiking} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const dishes = [
    {
        id: 0,
        name: "Greek Salad",
        price: "$12.99",
        getImageSrc: () => require("../images/greek_salad.jpg"),
        description:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
        id: 1,
        name: "Bruchetta",
        price: "$5.99",
        getImageSrc: () => require("../images/bruchetta.jpg"),
        description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    },
    {
        id: 2,
        name: "Lemon Dessert",
        price: "$5.00",
        getImageSrc: () => require("../images/lemon_dessert.jpg"),
        description:
            "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
];

const Card = ({ name, price, description, imageSrc }) => {
    return (
        <div className="card">
            <img src={imageSrc} alt={name} />
            <div className="card-content">
                <div className="card-head flex-row">
                    <h4 className="card-title card-title-text">{name}</h4>
                    <h4 className="card-price">{price}</h4>
                </div>
                <p className="p-text">{description}</p>
                <h5>Order a Delivery <FontAwesomeIcon icon={faPersonBiking} size="1x" /></h5>
            </div>
        </div>
    )
};

const Specials = () => {
    return (
        <div className="row">
            <div className="col-2"></div>
            <main className='col-8'>
                <div className="flex-row main-head">
                    <h1  className='displayTitle'>This weeks specials!</h1>
                    <button className="pillBtn">Online Menu</button>
                </div>
                <div className="cards flex-row">
                    {dishes.map(dish => {
                        return (
                            <Card key={dish.id} name={dish.name} price={dish.price} description={dish.description} imageSrc={dish.getImageSrc()} />
                        )
                    })}
                </div>
            </main>
            <div className="col-2"></div>
        </div>
    )

};

export default Specials;