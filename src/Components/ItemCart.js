import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ItemCart extends Component {
  constructor() {
    super();

    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);

    this.state = {
      quantity: 1,
    };
  }

  decrease() {
    const { quantity } = this.state;
    const zero = 0;
    if (quantity > zero) {
      this.setState({
        quantity: (quantity - 1),
      });
    } else {
      this.setState({
        quantity: 0,
      });
    }
  }

  increase() {
    const { quantity } = this.state;
    this.setState({
      quantity: (quantity + 1),
    });
  }

  render() {
    const { quantity } = this.state;
    const { product, ButtonDel } = this.props;
    const { title, price, thumbnail } = product;
    const two = 2;
    return (
      <div>
        <div className="shopping-list-each">
          <h4 data-testid="shopping-cart-product-name">{ title }</h4>
          <div>
            <img src={ thumbnail } alt={ title } />
            <p>{ `R$ ${parseFloat(quantity * price).toFixed(two)}` }</p>
          </div>
          <p data-testid="shopping-cart-product-quantity">
            { quantity }
          </p>
        </div>
        <Button
          testId="product-decrease-quantity"
          onClick={ this.decrease }
          nameButton="-"
        />
        { ButtonDel }
        <Button
          testId="product-increase-quantity"
          onClick={ this.increase }
          nameButton="+"
        />
      </div>
    );
  }
}

ItemCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemCart;
