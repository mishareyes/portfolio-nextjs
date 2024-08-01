import React, { ReactNode } from "react";

type sectionProps = {
  id: string;
  bg: string;
  children?: ReactNode;
};

export default function Section({ id, bg, children }: sectionProps) {
  const isCover = id === "home" ? "bg-cover h-screen" : "";

  return (
    <section id={id} className={`${bg} ${isCover} justify-center`}>
      {children}
    </section>
  );
}
