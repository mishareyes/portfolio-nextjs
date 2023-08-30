import Image from "next/image";
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
      <Image
        src={image}
        height="500"
        width="500"
        alt={`${title} Image`}
        className="flex rounded-t-3xl h-xs border-b-2 border-black"
      />
      <div className="flex flex-col items-center m-4 gap-2">
        <h3 className="font-serif text-3xl">{title}</h3>
        <p className="font-sans">{description}</p>
        <Button label={s.seeMore.toUpperCase()} color={color} link={link} />
      </div>
    </div>
  );
}
