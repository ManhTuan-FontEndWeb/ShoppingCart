import React, {Component} from 'react'

class CartItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }

    render() {
        var { item } = this.props
        var { quantity } = item.quantity > 0 ? item : this.state
        console.log(quantity)
  return (
    <tr>
                                    <th scope="row">
                                        <img src= {item.product.image}
                                            alt="" className="img-fluid z-depth-0" />
                                    </th>
                                    <td>
                                        <h5>
                                            <strong>{item.product.name}</strong>
                                        </h5>
                                    </td>
                                    <td>{item.product.price}$</td>
                                    <td className="center-on-small-only">
                                        <span className="qty"> {quantity} </span>
                                        <div className="btn-group radio-group" data-toggle="buttons">
                                            <label 
                                            onClick={ () => this.onUpdateQuantity(item.product, item.quantity-1) }
                                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                                                <a>—</a>
                                            </label>
                                            <label 
                                                onClick={ () => this.onUpdateQuantity(item.product, item.quantity+1) }
                                                className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                                                <a>+</a>
                                            </label> 
                                        </div>
                                    </td>
                                    <td>{ this.showSubTotal(item.product.price, item.quantity) }$</td>
                                    <td>
                                        <button t
                                        ype="button" 
                                        className="btn btn-sm btn-primary waves-effect waves-light" 
                                        data-toggle="tooltip" 
                                        data-placement="top"
                                        title="" 
                                        data-original-title="Remove item"
                                        onClick={() => this.onDelete(item.product)}
                                        >
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
  );
}

    showSubTotal = (price, quantity) =>
    {
        return price * quantity
    }    

    onDelete = (product) => {
        var {onDeleteProduct} = this.props
        onDeleteProduct(product)
    }

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            this.setState({
                quantity: quantity
            })
            this.props.onUpdateProductInCart(product, quantity)
        }
    }

}

export default CartItem;
