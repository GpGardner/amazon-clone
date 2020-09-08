import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
				className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt="amazon background"
        />
				
				<div className="home__row">
					<Product
						title="The lean startup"
						image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
						price={25.99}
						rating={5}
					/>

					<Product />
					
				</div>
				<div className="home__row">
					<Product />
					<Product />
					<Product />

				</div>
				<div className="home__row">
					{/* Product */}
					{/* Product */}
				</div>


      </div>
    </div>
  );
}

export default Home;
