type buttonProps = {
  label: string;
  color: "blue" | "violet" | "teal" | "orange";
  link?: string;
};

export default function Button({ label, color, link = "#" }: buttonProps) {
  let bgColor = "";

  // ideally, i would just use the ${color} as a variable itself in the string,
  // but something about tailwind doesn't immediately load the colors into the button :(
  switch (color) {
    case "blue":
      bgColor = "bg-blue-300 hover:bg-blue-400 hover:shadow-blue-300";
      break;
    case "violet":
      bgColor = "bg-violet-300 hover:bg-violet-400 hover:shadow-violet-300";
      break;
    case "teal":
      bgColor = "bg-teal-300 hover:bg-teal-400 hover:shadow-teal-300";
      break;
    case "orange":
      bgColor = "bg-orange-300 hover:bg-orange-400 hover:shadow-orange-300";
      break;
  }

  return (
    <a href={link} target="_blank">
      <div
        className={`flex justify-center rounded-full border-2 border-black text-sm px-4 py-2 ${bgColor}
           hover:shadow-lg active:bg-neutral-300 active:text-neutral-600 active:shadow-none duration-300`}>
        {label}
      </div>
    </a>
  );
}
