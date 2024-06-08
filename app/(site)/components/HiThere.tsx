import { strings as s } from "../constants";

type letterProps = {
  color: "blue" | "violet" | "teal" | "orange";
};

export default function HiThere() {
  const Letter = ({ color }: letterProps) => {
    return <h1 className={`hover:text-${color}-300`}>H</h1>;
  };

  return (
    <>
      <h1>{s.hiThere.toUpperCase()}</h1>
      <Letter color="blue" />
    </>
  );
}
