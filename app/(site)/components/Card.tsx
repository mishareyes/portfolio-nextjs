import { strings as s } from "../constants";
import { Button } from ".";

type cardProps = {
  type: "project" | "design";
  image: string;
  title: string;
  description: string;
  link: string;
};

export default function Card({
  type,
  image,
  title,
  description,
  link,
}: cardProps) {
  const color = type === "project" ? "blue" : "violet";

  return (
    <div
      className={`flex flex-col bg-white rounded-3xl border-2 border-black text-center duration-300
      hover:scale-105 hover:rotate-1 hover:shadow-xl`}>
      <img
        src={image}
        alt={`${title} Image`}
        className="object-cover w-full h-48 rounded-t-3xl border-b-2 border-black"
      />
      <div className="flex flex-col items-center m-4 gap-2">
        <h3>{title}</h3>
        <p className="font-sans text-sm">{description}</p>
        <Button label={s.seeMore.toUpperCase()} color={color} link={link} />
      </div>
    </div>
  );
}
