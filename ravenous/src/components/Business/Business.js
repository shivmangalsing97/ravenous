import React from 'react' ;
import './Business.css' ;

const Businesses = {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}
class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src= {Businesses.imageSrc}/>
                </div>
                <h2>{Businesses.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{Businesses.address}</p>
                        <p>{Businesses.city}</p>
                        <p>{Businesses.state}, {Businesses.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{Businesses.category}</h3>
                        <h3 className="rating">{Businesses.rating}</h3>
                        <p>{Businesses.reviewCount}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Business ;