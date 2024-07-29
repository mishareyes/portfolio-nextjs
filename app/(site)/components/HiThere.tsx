type letterProps = {
  color: "blue" | "violet" | "teal" | "orange";
  letter: string;
};

export default function HiThere() {
  const Letter = ({ color, letter }: letterProps) => {
    let hoverColor = "";

    // ideally, i would just use the ${color} as a variable itself in the string,
    // but something about tailwind doesn't immediately load the colors into the button :(
    switch (color) {
      case "blue":
        hoverColor = "hover:text-blue-300";
        break;
      case "violet":
        hoverColor = "hover:text-violet-300";
        break;
      case "teal":
        hoverColor = "hover:text-teal-300";
        break;
      case "orange":
        hoverColor = "hover:text-orange-300";
        break;
    }

    return (
      <h1
        className={`${hoverColor} hover:translate-y-[-20px] duration-500 delay-75`}>
        {letter}
      </h1>
    );
  };

  return (
    <div className="flex flex-row justify-center">
      <Letter color="orange" letter="H" />
      <Letter color="violet" letter="I" />
      <p>&nbsp;</p>
      <Letter color="blue" letter="T" />
      <Letter color="teal" letter="H" />
      <Letter color="orange" letter="E" />
      <Letter color="violet" letter="R" />
      <Letter color="blue" letter="E" />
      <Letter color="teal" letter="!" />
    </div>
  );
}
