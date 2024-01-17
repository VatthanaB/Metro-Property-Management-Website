import PropertyCarousel from "./PropertyCarousel";
import style from "./PropertyPage.module.css";
const PropertyPage = () => {
  return (
    <div className={style.text}>
      {" "}
      Joshua PropertyPage !!!!!!!
      <div>
        <PropertyCarousel />
      </div>
    </div>
  );
};

export default PropertyPage;
