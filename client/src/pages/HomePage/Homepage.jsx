
import Awards2 from "./Awards2";
import Banner from "./Banner";
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import CarouselReactSlick from "./CarouselReactSlick";

import ClientSay from "./ClientSay";
import Services from "./Services";

const comments = [
  {
    comment:'Metro Property Management provided an excellent service for my rental property.Their team demonstrated professionalism and experties, ensuring competitive rental pricing and efficient tenant screening.',
  },
  {
    comment:'Metro Property Management provided an excellent service for my rental property.Their team demonstrated professionalism and experties, ensuring competitive rental pricing and efficient tenant screening.',
  },
  {
    comment:'Metro Property Management provided an excellent service for my rental property.Their team demonstrated professionalism and experties, ensuring competitive rental pricing and efficient tenant screening.',
  },

  
  
]



const Homepage = () => {
  return <div>
    <Banner/>
    <Services/>    
    <ClientSay/>
    <CarouselReactSlick/>
    <Carousel2/>
    
      <Carousel autoSlide={true}>
      {comments.map((s)=>(
        <p>{s.comment}</p>
      ))}
    </Carousel>
      
    <Awards2/>        
    
     </div>;
};

export default Homepage;
