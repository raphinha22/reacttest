import { useParams } from "react-router-dom";
import data from "../Data/data";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    img,
    display,
    title,
    color,
    announced,
    camera,
    resolution,
    chipset,
    ram,
    battery,
    price,
  } = data.find((d) => d.id == id);
  return (
    <div>
      <div>
        <img src={img} alt={title} />
      </div>
      <ul>
        <li>Screen: <span>{display}</span></li>
        <li>Color: <span>{color}</span></li>
        <li>Model: <span>{title}</span></li>
        <li>Announced: <span>{announced}</span></li>
        <li>Camera: <span>{camera}</span></li>
        <li>Resolution: <span>{resolution}</span></li>
        <li>Chipset: <span>{chipset}</span></li>
        <li>Ram: <span>{ram}</span></li>
        <li>Battery: <span>{battery}</span></li>
        <li>Price: <span>{price}</span></li>
      </ul>
    </div>
  );
};

export default ProductDetails;
