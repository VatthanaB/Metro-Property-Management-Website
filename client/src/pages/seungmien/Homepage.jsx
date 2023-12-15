import Awards from "./Awards";
import Banner from "./Banner";
import ClientSay from "./ClientSay";
import Services from "./Services";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Services />
      <ClientSay />
      <Awards />
    </div>
  );
};

export default Homepage;
