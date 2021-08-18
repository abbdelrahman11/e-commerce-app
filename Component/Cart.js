import React, { Component } from "react";
import formatCurrence from "../curr";

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">cart is empty</div>
        ) : (
          <div className="cart cart-header">
            you have {cartItems.length} in the cart{" "}
          </div>
        )}
        <div className="cart">
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item._id}>
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="cart-text">
                  <div>{item.title}</div>
                  <div className="right">
                    ${item.price} x {item.count}{" "}
                    <button
                      className="button"
                      onClick={() => this.props.removeFormCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {cartItems.length !== 0 && (
          <div className="cart">
            <div className="total">
              <div>
                Total:{" "}
                {formatCurrence(
                  cartItems.reduce((a, c) => a + c.price * c.count, 0)
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
