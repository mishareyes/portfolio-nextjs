import { strings as s } from "../constants";
import { Button } from ".";
import Image from "next/image";

type cardProps = {
  type: "project" | "design";
  newTab?: boolean;
  image: string;
  title: string;
  description: string;
  link: string;
  date: string;
};

export default function Card({
  type,
  newTab,
  image,
  title,
  description,
  link,
  date,
}: cardProps) {
  const color = type === "project" ? "blue" : "violet";

  return (
    <div
      className={`xl:flex-quarters lg:flex-thirds md:flex-halves flex-whole max-w-xs
      flex-col bg-white rounded-3xl border-2 border-black text-center duration-500
      hover:scale-105 hover:rotate-1 hover:shadow-xl`}>
      <Image
        src={image}
        alt={`${title} Image`}
        width={400}
        height={400}
        className="rounded-t-3xl border-b-2 border-black object-cover"
      />
      <div className="flex flex-col items-center m-4 gap-2 h-full">
        <h3>{title}</h3>
        <p className="font-semibold">{date}</p>
        <p className="font-sans text-sm">{description}</p>
        <Button
          label={s.seeMore.toUpperCase()}
          color={color}
          link={link}
          newTab={newTab}
        />
      </div>
    </div>
  );
}
