type buttonProps = {
  label: string;
  color: "blue" | "violet" | "teal" | "orange";
  link?: string;
};

export default function Button({ label, color, link = "#" }: buttonProps) {
  return (
    <a href={link} target="_blank">
      <div
        className={`flex justify-center bg-${color}-300 rounded-full border-2 border-black text-sm px-4 py-2 
          hover:bg-${color}-400 hover:shadow-lg hover:shadow-${color}-300
          active:bg-neutral-300 active:text-neutral-600 active:shadow-none duration-300`}>
        {label}
      </div>
    </a>
  );
}
