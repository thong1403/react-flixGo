import NavItem from "../nav-item/Nav-Item";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Item.css";

function Items() {
  const [item, setItem] = useState([]);
  const [cartItem, setCart] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:3000/items")
      .then((data) => setItem(data.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3000/posts")
    .then((data) => setCart(data.data))
    .catch((err) => console.log(err))
  })
  return (
    <>
      <NavItem />
      <div className="container new-item-content">
        <div className="row">
          {item.map((e) => {
            return (
              <>
                <div className="col-6 item-content-cart">
                  <img src={e.image} alt="" className="img-item" />
                  <div>
                    <h4>{e.title}</h4>
                    <p className="action-item">{e.action}</p>
                    <h3>{e.point}</h3>
                    <p className="content-item-cart">{e.content}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className="title-cart">Expected premiere</h1>
          </div>
          {cartItem.map((e) => {
            return(
              <div className="col-2 cart-item-content">
                <img src={e.image} alt="" className="img-cart" />
                <h5>{e.title}</h5>
                <p>{e.author}</p>
                <h3>{e.point}</h3>
              </div>
            )
          })}
        </div>
        <div className="row">
          <div className="col-12 btn-cart">
            <button className="btn-show">SHOW MORE</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
