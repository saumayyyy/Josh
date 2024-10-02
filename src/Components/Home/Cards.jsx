import React from "react"
import {cardData} from "../../assets/data"
import Card from "../Common/Card"

const Cards = () => {
    return (
        <div className="bg-gray-100 p-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {cardData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      );
};

export default Cards;
