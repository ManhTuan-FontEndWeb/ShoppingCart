import React, {Component} from 'react'
import { connect } from 'react-redux'
import Products from '../component/Products'
import Product from '../component/Product';
import PropTypes from 'prop-types';
import { actAddToCart } from './../action/index';


class ProductContainer extends Component {
  render() {
  var { products } = this.props;
  return (
        <Products>
            {this.showProducts(products)} 
            {/* Truyền các item theo kiểu children */}
        </Products>
  );
}
showProducts(products)
  {
    var result = null;
    var { onAddToCart } = this.props
    if(products.length > 0)
    {
      result = products.map((product, index) => {
        return <Product 
        key={index} 
        product={product} 
        onAddToCart = {onAddToCart}
        />
      })
    }
    return result
  }
}

ProductContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id : PropTypes.number.isRequired,
      name : PropTypes.string.isRequired,
      image : PropTypes.string.isRequired,
      idescriptiond : PropTypes.string.isRequired,
      price : PropTypes.number.isRequired,
      inventory : PropTypes.number.isRequired,
      rating : PropTypes.number.isRequired
    })
  ).isRequired
}

const mapStateToProps = state => {
  return {
    products : state.products
  }
}

const mapDispatchToProps = (disphatch, props) => {
    return {
        onAddToCart: (product) => {
          disphatch(actAddToCart(product, 1)) // Bắn dữ liệu type.... ra
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductContainer);
