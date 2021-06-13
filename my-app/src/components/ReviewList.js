import React, {Component} from 'react';
import axios from 'axios';
import './ReviewList.css';

class ReviewList extends Component {

    state = {
        reviewList : [
            {id:1,reviewer:"Pradeep",details:"This is very good stuff. Lorem Ipsum...............",rating:5},
            {id:2,reviewer:"Hobbes",details:"This is very good stuff. Lorem Ipsum more...............",rating:5}
        ],
        currentProductId:0
    }

    componentDidUpdate(){
        if(this.props.product && (this.state.currentProductId !== this.props.product.id)){
            axios.get("http://localhost:8080/products/"+this.props.product.id+"/reviews").then(response => {
            console.log("setting data into review list"+response.data)    
            this.setState({reviewList:response.data,currentProductId:this.props.product.id})})
        }
    }
    render(){

        const reviews = this.state.reviewList.map( r =>{

            return(
                <div className="aReview">
                    <p className="reviewer">{r.reviewer}</p>
                    <p className="rating"> {r.rating}</p>
                    <p className="details">{r.details}</p>
                </div>
            );

        });

        return(
            <div>
                {reviews}

            </div>
        );
    }

}

export default ReviewList;
