import React, { Component } from 'react';
import './ProductInfo.css';

class ProductInfo extends Component {

    render() {
        return (
            <div className="ProductInfo">
                <div className="ui card">
                    <div className="image">
                        <img src={this.props.product.url} height="40" width="30" onClick={this.props.clickHandler} />
                    </div>
                    <div className="content">
                        <a className="header">{this.props.product.name}</a>
                        <div className="meta">
                            <span className="date">Costs $ {this.props.product.price}</span>
                        </div>
                       
                    </div>
                    <div className="extra content">
                        <a>
                            <i className="user icon"></i>
                                Qty Availabe : {this.props.product.qoh}
                            </a>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProductInfo;
