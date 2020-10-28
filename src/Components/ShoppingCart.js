import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import ItemCart from './ItemCart';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.clearCart = this.clearCart.bind(this);
    this.removeCart = this.removeCart.bind(this);
    const arrCart = Object.entries(localStorage);
    this.state = {
      cart: arrCart || [],
    };
  }

  clearCart() {
    localStorage.clear();
    document.location.reload();
  }

  removeCart(item) {
    const { cart } = this.state;
    console.log('antes', cart);
    const newCart = cart.map((each) => (each.id !== item.id ? each : localStorage.removeItem(each)));
    console.log('depois', cart);
    this.setState({
      cart: newCart,
    });
    // document.location.reload();
  }

  render() {
    const { cart } = this.state;
    const zero = 0;
    let itens;

    if (cart.length > zero) {
      itens = cart.map((item) => {
        if (item !== undefined) {
          return (
            <ItemCart
              key={ item.id }
              product={ item }
              ButtonDel={ <Button
                testId="button-remove"
                nameButton="REMOVER"
                onClick={ () => this.removeCart(item) }
              /> }
            />
          );
        }
        return itens;
      });
    } else {
      itens = <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }

    return (
      <div className="shopping-container">
        <Link to="/">Home</Link>
        <h1>Meu Carrinho</h1>
        <button type="button" onClick={ () => this.clearCart() }>Limpar Carrinho</button>
        <div className="shopping-list-section">
          {itens}
        </div>
        <p>Valor Total:</p>
        <button
          type="button"
        >
          Finalizar Compra
        </button>
      </div>
    );
  }
}

export default ShoppingCart;
