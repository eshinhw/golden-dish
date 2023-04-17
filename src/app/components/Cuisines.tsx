import KoreanCuisine from "../../../public/images/cuisines/korean.png";
import Dessert from "../../../public/images/cuisines/dessert.png";
import ItalianCuisine from "../../../public/images/cuisines/italian.png";
import Pizza from "../../../public/images/cuisines/pizza.png";
import Image from "next/image";

export default function Cuisines() {
  return (
    <section className="flex">
      <div className="flex flex-col items-center">
        <Image src={KoreanCuisine} alt="korean" className="w-16 h-16" />
        <h1>Korean</h1>
      </div>
      <div className="flex flex-col items-center">
        <Image src={ItalianCuisine} alt="italian" className="w-16 h-16" />
        <h1>Italian</h1>
      </div>
      <div className="flex flex-col items-center">
        <Image src={Pizza} alt="pizza" className="w-16 h-16" />
        <h1>Pizza</h1>
      </div>
      <div className="flex flex-col items-center">
        <Image src={Dessert} alt="dessert" className="w-16 h-16" />
        <h1>Dessert</h1>
      </div>
    </section>
  );
}
