import React from "react";
// import {Link} from 'react-router-dom';
import { addToCart, updateCart, deleteFromCart } from '../actions/cart-actions';
import store from '../store.js';


class App extends React.Component {
  constructor(props){
      super(props)
      this.state = {

      }
  }
  componentDidMount() {
    store.dispatch(addToCart('Flour 1kg', 2));
    store.dispatch(updateCart('Flour 1kg', 5));
    console.log('initial state:', store.getState());
  }
  render() {
    return (
        <div>
          这是home页
        </div>
    )
  }
}

export default App