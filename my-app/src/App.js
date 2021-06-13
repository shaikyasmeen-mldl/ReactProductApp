// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// import ProductInfo from './components/ProductInfo';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//          <ProductInfo name="Cute Cat" price="250" qoh="6" url="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1027&q=80"/>
//          <ProductInfo name="Loyal Dog" price="450" qoh="16" url="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"/>
//       </div>
//     );
//   }
// }

// export default App;
//=================================================
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// import ProductInfo from './components/ProductInfo';

// class App extends Component {

//   state = {
//     productList: [
//       {id:1,name:"Cute Cat",price:250,qoh:6,url:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1027&q=80"},
//       {id:2,name:"Loyal Dog",price:450,qoh:16,url:"https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"}
//     ]
//   }

//   render() {
//     return (
//       <div className="App">
//          <ProductInfo name={this.state.productList[0].name} price={this.state.productList[0].price} qoh={this.state.productList[0].qoh} url={this.state.productList[0].url}/>
         
//          <ProductInfo name={this.state.productList[1].name} price={this.state.productList[1].price} qoh={this.state.productList[1].qoh} url={this.state.productList[1].url}/>
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import ProductInfo from './components/ProductInfo';
import ReviewList from './components/ReviewList';


class App extends Component {

  state = {
    productList: [],
    selectedProduct:null
  }

  productSelectionHandler = (aProduct) => {
    this.setState({selectedProduct: aProduct});
  }



  componentDidMount(){
    axios.get("http://localhost:8080/products").then(response =>{
      console.log(response.data);
      this.setState({productList:response.data});
    });
  }

  render() {

    const productInfoTags = this.state.productList.map(aProduct => {
      return (
              <ProductInfo product={aProduct} clickHandler={() => { this.productSelectionHandler(aProduct)}}></ProductInfo>
      );
    } );


    return (
      <div className="App">
         <div>
         {productInfoTags}
         </div>
         <br/>
         <div>
            <ReviewList product={this.state.selectedProduct}/>

         </div>
      </div>
    );
  }
}

export default App;

