type tagProps = {
  label: string;
  colorIndex: number;
};

const colors = ["blue", "violet", "teal", "orange"];

export default function Tag({ label, colorIndex }: tagProps) {
  const selectedColor = colors[colorIndex % colors.length];
  let bgColor = "";

  // ideally, i would just use the ${color} as a variable itself in the string,
  // but something about tailwind doesn't immediately load the colors into the button :(
  switch (selectedColor) {
    case "blue":
      bgColor = "bg-blue-300 hover:bg-blue-400";
      break;
    case "violet":
      bgColor = "bg-violet-300 hover:bg-violet-400";
      break;
    case "teal":
      bgColor = "bg-teal-300 hover:bg-teal-400";
      break;
    case "orange":
      bgColor = "bg-orange-300 hover:bg-orange-400";
      break;
  }

  return (
    <div
      className={`${bgColor} text-sm w-fit rounded-full px-4 py-2 m-2 transition-all duration-300 
      ease-in-out transform hover:shadow-lg hover:scale-110 hover:rotate-2`}>
      {label}
    </div>
  );
}
