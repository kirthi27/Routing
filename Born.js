import 'bootstrap/dist/css/bootstrap.min.css';
import  { Carousel, CarouselItem } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Img1 from './images/tinytots.jpg';
import Img2 from './images/carter.jpg';
import Img3 from './images/babyhug.jpg';
import Img4 from './images/cat-banner.jpg';


function caro(){
    return(
        <div>
            <Carousel>
                <CarouselItem>
                    <Image src={Img1} width="100%"/>
                <Carousel.Caption></Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                <Image src={Img2} width="100%"/>
                <Carousel.Caption></Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                <Image src={Img3} width="100%"/>
                <Carousel.Caption></Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                <Image src={Img4} width="100%"/>
                <Carousel.Caption></Carousel.Caption>
                </CarouselItem>
                </Carousel>
        </div>            
         
    )
}

export default caro;
// import Carousel from 'react-bootstrap/Carousel';
// import React from 'react';
// // import Img1 from './images/tinytots.jpg';
// // import Img2 from './images/kids.jpg';
// // import Img3  from './images/tinytots.jpg';
// // import Img4 from './images/carter.jpg';

// function Born(){
//     return(
      
//         <div>
//                 <Carousel>
//       <Carousel.Item>
//       <img className="d-block w-100" src={require("./images/tinytots.jpg")} alt="First slide"/>
//       </Carousel.Item>
//        <Carousel.Item>
//       <img className="d-block w-100" src={require("./images/weekend.jpg")} alt="second slide"/>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img className="d-block w-100" src={require("./images/kids.jpg")} alt="cbslide"/>
//           </Carousel.Item>
//           <Carousel.Item>
//           <img className="d-block w-100" src={require("./images/tinytots.jpg")} alt="fourth lide"/>
//           </Carousel.Item>
//           </Carousel> 
            
          
//             </div>
            
         
//     );
// }

// export default Born;