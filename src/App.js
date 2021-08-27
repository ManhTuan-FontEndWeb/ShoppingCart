import React, {Component} from 'react'
import Header from './component/Header';
import ProductContainer from './containers/productContainer'
import Message from './component/Message';
import Footer from './component/Footer';
import CartContainer from './containers/cartcontainer';

function App() {
  return (
    <div>
        <Header />
        <main id="mainContainer">
            <div className="container">
                <ProductContainer />
                <Message />
                <CartContainer />
            </div>
        </main>
        <Footer />
    </div>
  );
}

export default App;
