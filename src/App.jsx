import { useState } from "react";
import Header from "./component/Header";
import Info from "./component/Info";
import Card from "./component/Card";

import "./App.css";

import Hotel1 from "@/assets/hotels/Danubius Hotel Regents Park.svg";
import Hotel2 from "@/assets/hotels/London Bridge Hotel.svg";
import Hotel3 from "@/assets/hotels/The Hotel Blursee.svg";
import Hotel4 from "@/assets/hotels/The Hotel Chaziry.svg";
import Hotel5 from "@/assets/hotels/The Resident Soho.svg";
import Hotel6 from "@/assets/hotels/The Resident Suns Hotel.svg";

const hotels = [
  {
    name: "Danubius Hotel Regents Park",
    image: Hotel1,
    geo: "Город, район, улица, дом",
    price: 5000,
    stars: 4,
  },
  {
    name: "London Bridge Hotel",
    image: Hotel2,
    geo: "Город, район, улица, дом",
    price: 4800,
    stars: 3,
  },
  {
    name: "The Hotel Blursee",
    image: Hotel3,
    geo: "Город, район, улица, дом",
    price: 6000,
    stars: 4,
  },
  {
    name: "The Hotel Chaziry",
    image: Hotel4,
    geo: "Город, район, улица, дом",
    price: 18000,
    stars: 5,
  },
  {
    name: "The Resident Soho",
    image: Hotel5,
    geo: "Город, район, улица, дом",
    price: 10000,
    stars: 5,
  },
  {
    name: "The Resident Suns Hotel",
    image: Hotel6,
    geo: "Город, район, улица, дом",
    price: 8000,
    stars: 4,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Info />
        <div className="sorter">
          <span className="sort">1 звезда</span>
          <span className="sort">2 звезды</span>
          <span className="sort">3 звезды</span>
          <span className="sort">4 звезды</span>
          <span className="sort sort-selected">5 звезд</span>
        </div>

        <select className="alt-sorter">
          <option className="sort">1 звезда</option>
          <option className="sort">2 звезды</option>
          <option className="sort">3 звезды</option>
          <option className="sort">4 звезды</option>
          <option className="sort sort-selected" selected>
            5 звезд
          </option>
        </select>

        <div className="Cards">
          {hotels.map(({ name, image, geo, price, stars }) => {
            return (
              <Card
                title={name}
                srcimg={image}
                geo={geo}
                price={price}
                stars={stars}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
