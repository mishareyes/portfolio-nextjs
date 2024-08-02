type backButtonProps = {
  returnTo?: string;
};

export default function BackButton({ returnTo = "/#" }: backButtonProps) {
  return (
    <a href={returnTo}>
      <svg
        className="hover:fill-white hover:scale-125 active:fill-violet-300 duration-500"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="#f6bd88"
        viewBox="0 0 24 24">
        <path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm-1-17v4h8v2h-8v4l-6-5 6-5z" />
      </svg>
    </a>
  );
}
