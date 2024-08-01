import Social from "./Social";

type socialsProps = {
  size?: "small" | "medium" | "large";
};

export default function MySocials({ size = "large" }: socialsProps) {
  return (
    <div className="flex flex-row justify-center gap-4">
      <Social type="email" link="mailto:mishaoreyes@gmail.com" size={size} />
      <Social
        type="linkedin"
        link="https://www.linkedin.com/in/misha-reyes/"
        size={size}
      />
      <Social
        type="instagram"
        link="https://www.instagram.com/misha.reyes/"
        size={size}
      />
      <Social type="github" link="https://github.com/mishareyes" size={size} />
    </div>
  );
}
