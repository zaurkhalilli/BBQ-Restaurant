import styled from '../MenuTop/Menutop.scss';
import React, { useState } from "react";

function Menutop() {
  const [searchTerm, setSearchTerm] = useState("");
  const menuItems = [
    { id: 1, name: "Smoked Brisket", image: "https://simplyhomecooked.com/wp-content/uploads/2024/04/smoked-beef-brisket-20.jpg", price: 15.99 },
    { id: 2, name: "Burger", image: "https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/intro-1662064407.jpg", price: 8.99 },
    { id: 3, name: "Grilled Chicken", image: "https://www.foxandbriar.com/wp-content/uploads/2023/07/Grilled-BBQ-Chicken-15-of-18.jpg", price: 9.99 },
    { id: 4, name: "BBQ Chicken Wings", image: "https://images.unsplash.com/photo-1614398751058-eb2e0bf63e53?q=80&w=1428&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 14.99 },
    { id: 5, name: "St. Louis Style Ribs", image: "https://images.getrecipekit.com/20220419200525-btl-bbq-20ribs-1.jpg?aspect_ratio=16:9&quality=90&", price: 24.99 },
    { id: 6, name: "Steak", image: "https://plus.unsplash.com/premium_photo-1723478557023-1f739ec06671?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3RlYWt8ZW58MHx8MHx8fDA%3D", price: 19.99 },
    { id: 7, name: "Smoked Sausages", image: "https://plus.unsplash.com/premium_photo-1661313627982-615bb6576cc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNtb2tlZCUyMFNhdXNhZ2VzfGVufDB8fDB8fHww", price: 14.99 },
    { id: 8, name: "Barbecue Platter", image: "https://images.unsplash.com/photo-1676300184878-02199c0d02f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmFyYmVjdWUlMjBQbGF0dGVyfGVufDB8fDB8fHww", price: 26.99 },
    { id: 9, name: "Baby Back Ribs", image: "https://shewearsmanyhats.com/wp-content/uploads/2014/06/babyback-ribs-5.jpg", price: 19.99 },
    { id: 10, name: "Pulled Pork Sandwich", image: "https://www.simplyrecipes.com/thmb/X3Hzg36FHEhr_UDdob6sgx7wRqw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Pulled-Pork-Sandwich-Lead-3b_recirc-11bef20a2da0462d93959411a7dba7e1.jpg", price: 18.99 },
    { id: 11, name: "Bacon", image: "https://www.bhg.com/thmb/37ps0cuGNH1cCfaGASICj5ySyFs=/4000x0/filters:no_upscale():strip_icc()/BHG-recipes-breakfast-meats-how-to-cook-bacon-hero-01-aa03bb2a34ec4135b80085a1da6bfe67.jpg", price: 7.99 },
    { id: 12, name: "Mix Grilled Meat", image: "https://www.thermofisher.com/blog/food/wp-content/uploads/sites/5/2021/05/istock-1219721088_meatongrill-1.jpg", price: 34.99 },
    { id: 13, name: "Pizza", image: "https://i0.wp.com/blog.slicelife.com/wp-content/uploads/2019/06/crisp-pepperoni.jpg?fit=1200%2C630&ssl=1", price: 6.99 },
    { id: 14, name: "French Fries", image: "https://www.thespruceeats.com/thmb/6Ijd0M6aeo2rDxbrwvZ-CUFtk44=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-homemade-french-fries-2215971-step-08-00f9e1627d0541a89ece39e2ec72bd7d.jpg", price: 3.99 },
    { id: 15, name: "Tacos", image: "https://www.thefoodinmybeard.com/content/taco/whitepeople/wpt10.jpg", price: 8.99 },
    { id: 16, name: "Club Sandwich", image: "https://cdn7.kiwilimon.com/recetaimagen/38989/640x640/50344.jpg.jpg", price: 6.99 },
    { id: 17, name: "Hot Dog", image: "https://cdn.britannica.com/27/213427-050-869B98FE/Chicago-style-hot-dog.jpg", price: 3.99 },
    { id: 18, name: "Grilled Fish", image: "https://thesecretsuppersociety.com/wp-content/uploads/2022/06/Greek-Style-Grilled-Fish-1-500x500.jpg", price: 17.99 },
    { id: 19, name: "Coleslaw", image: "https://www.inspiredtaste.net/wp-content/uploads/2015/01/Coleslaw-Recipe-1-1200.jpg", price: 12.99 },
    { id: 20, name: "Italian Chopped Salad", image: "https://www.wellplated.com/wp-content/uploads/2021/01/Best-Italian-Chopped-Salad.jpg", price: 9.99 },
    { id: 21, name: "Caesar Salad with Avocado", image: "https://itsavegworldafterall.com/wp-content/uploads/2023/04/Avocado-Caesar-Salad-FI.jpg", price: 10.99 },
    { id: 22, name: "Orzo Salad", image: "https://optimise2.assets-servd.host/billowy-turkey/production/posts/SpinachOrzoSaladWithFetaTomatoesandaBasilDressing_7.jpg?w=1200&q=82&auto=format&fit=crop&dm=1716056301&s=15b2bafde5b8d81ac5ddfd23c3724a29", price: 9.99 },
    { id: 23, name: "Pomegranate Salad", image: "https://images.immediate.co.uk/production/volatile/sites/30/2024/01/230120241706010250.jpeg?quality=90&resize=556,505", price: 12.99 },
    { id: 24, name: "Salmon Salad", image: "https://www.eatingwell.com/thmb/K2acdAhEM6Dn9it4U9Wq7grA2hQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/salmon-avocado-salad-1244-0baccb18211c48e392d5fdf418366d56.jpg", price: 14.99 },
    { id: 25, name: "S'mores Brownies", image: "https://www.amummytoo.co.uk/wp-content/uploads/2023/05/SMore-brownie-recipe-SQUARE-1-500x500.jpg", price: 3.99 },
    { id: 26, name: "Monte Bianco", image: "https://images.getrecipekit.com/20220516102843-mont-20blanc-20dessert-202.jpg?aspect_ratio=16:9&quality=90&", price: 6.99 },
    { id: 27, name: "Chocolate Profiteroles", image: "https://www.browneyedbaker.com/wp-content/uploads/2021/04/profiteroles-8-square-1.jpg", price: 5.99 },
    { id: 28, name: "Key Lime Pie", image: "https://www.allrecipes.com/thmb/A-6rkpI0Rue80ECAYoqhgpEClfg=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/12698-Easy-Key-Lime-Pie-ddmfs-103444-4x3-1-eb1a59500e384b2b8939094ce18d08be.jpg", price: 4.99 },
    { id: 29, name: "Fruit Skewers / With Chocolate(Optional)", image: "https://therecipecritic.com/wp-content/uploads/2021/04/fruitskewers.jpg", price: 10.99 },
    { id: 30, name: "Belgium chocolate Croissant", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOLUfpWHV4dHQz3DXmi5D_33qWVCbgnEnFA&s", price: 8.99 },
    { id: 31, name: "Coca-Cola/Zero, Fanta, Sprite", image: "https://img01.flagma.ae/photo/coca-cola-fanta-sprite-pepsi-7up-1706351_big.jpg", price: 1.99 },
    { id: 32, name: "Dr.Pepper", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSzVHm3Q0xp4kMYmXO7Lu3sIY5yqS-BX5_Ew&s", price: 1.99 },
    { id: 33, name: "Long Island Cocktail", image: "https://www.supergoldenbakes.com/wordpress/wp-content/uploads/2019/07/Long_island_iced_tea-1-4s.jpg", price: 2.99 },
    { id: 34, name: "Mohito", image: "https://www.przez-zoladek-do-serca.pl/wp-content/uploads/2023/09/mohito-drink.webp", price: 2.99 },
    { id: 35, name: "Bellini", image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/03/bellini.jpg", price: 3.99 },
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Menutop">
      <h1>Our Menu</h1>
      
     <div className="input"> 
        <input type="text"
        placeholder="Search by food name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>

      <div className="menu">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} className="card-img" />
              <div className="card-info">
                <h3>{item.name}</h3>
                <p>{item.price} $</p>
              </div>
            </div>
          ))
        ) : (
          <div className="result">
            <p>No results found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Menutop;
