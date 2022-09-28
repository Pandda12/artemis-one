import React, {Component} from 'react';
import  Carousel from "react-bootstrap/Carousel";
import Genskin from '../assets/Isis-Geneskin.jpg';
import Glyco from '../assets/Isis-Glyco-A.jpg';


class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                 <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src={Genskin}
                        alt="Geneskin"
                     />
                     <Carousel.Caption>
                         <h3>IsisPharma Geneskin</h3>
                         <p>All September</p>
                     </Carousel.Caption>
                 </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Glyco}
                        alt="Glyco"
                    />
                    <Carousel.Caption>
                        <h3>IsisPharma Glyco </h3>
                        <p>All September</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        );
    }
}

export default CarouselBox;