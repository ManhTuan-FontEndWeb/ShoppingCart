import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Cart from './../component/Cart';
import CartItem from './../component/CartItem';
import Cartresult from './../component/CartResult'
import * as message from './../constants/message'
import { actRemoveProductInCart, actUpdateProductInCart } from './../action/index'


class CartContainer extends Component {
  render() {
    var { cart } = this.props;
    console.log(cart)
    return (
        <Cart>
            { this.showCartItem(cart) }
            { this.showTotalAmount(cart) }
        </Cart>
  );
}

  showCartItem = (cart) => {
    var {onDeleteProduct, onUpdateProductInCart} = this.props
      var result = message.MSG_CART_EMPTY;
      if (cart.length > 0) {
          result = cart.map((item, index) => {
              return (
                <CartItem
                  key={ index }
                  item={item}
                  index={index}
                  onDeleteProduct = {onDeleteProduct}
                  onUpdateProductInCart={onUpdateProductInCart}
                />
              )
          });
      }
      return result
  }

  showTotalAmount = (cart) => {
      var result = null;
      if (cart.length > 0) {
          result = <Cartresult cart={cart} />
      }
      return result
  }

}


CartContainer.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
          product: PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            idescriptiond : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
          }).isRequired,
          quantity: PropTypes.number.isRequired
      })).isRequired
}

const mapStateToProps = state => {
    return { 
      cart : state.cart
    }
}

const mapDipatchToProps = (dispatch, props) => {
  return {
    onDeleteProduct : (product) => {
      dispatch(actRemoveProductInCart(product))
    },
    onUpdateProductInCart : (product, quantity) => {
      dispatch(actUpdateProductInCart(product, quantity));
    }
  }
}


export default connect(mapStateToProps, mapDipatchToProps) (CartContainer);
