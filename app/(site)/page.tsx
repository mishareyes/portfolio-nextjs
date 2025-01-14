import {
  Button,
  Card,
  HiThere,
  Section,
  MySocials,
  Paragraph,
} from "./components";
import { strings as s, designSummaries, projectSummaries } from "./constants";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex flex-col">
      <Section id="home" bg="bg-home">
        <HiThere />
        <Paragraph className="text-center text-xl lg:mx-16 md:mx-4 sm:mx-0 mb-3">
          {s.intro}
        </Paragraph>
        <MySocials />
      </Section>

      <Section id="about-me" bg="bg-aboutMe">
        <div className="flex flex-col md:flex-row md:flex-halves flex-whole">
          <div className="flex flex-col gap-4 items-start">
            <h1>{s.aboutMe.toUpperCase()}</h1>
            <Paragraph>{s.aboutMeInfo}</Paragraph>
            <Button
              label={s.viewResume}
              color="orange"
              link="/Misha-Reyes-Resume-2024.pdf"
              newTab
            />
          </div>
          <Image
            src="/headshot.png"
            alt="Misha Reyes Headshot"
            width={800}
            height={800}
            className="object-contain md:w-2/5 md:max-w-sm md:pt-0 pt-8
            duration-500 hover:scale-105 hover:rotate-1"
          />
        </div>
      </Section>

      <Section id="projects" bg="bg-projects">
        <h1>{s.projects.toUpperCase()}</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {projectSummaries.map((project, index) => (
            <Card
              type="project"
              {...project}
              key={index}
              newTab={project.newTab}
            />
          ))}
        </div>
      </Section>

      <Section id="designs" bg="bg-designs">
        <h1>{s.designs.toUpperCase()}</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {designSummaries.map((design, index) => (
            <Card
              type="design"
              {...design}
              key={index}
              newTab={design.newTab}
            />
          ))}
        </div>
      </Section>

      <Section id="contact" bg="bg-contact">
        <h1>{s.contact.toUpperCase()}</h1>
        <MySocials />
      </Section>

      <a href="/secret">
        <div
          id="secret-footer"
          className="justify-center border-2 border-t-0 border-black duration-500 bg-flip bg-animation cursor-pointer">
          {/* todo: add `cursor-pointer` to classNames once the link is added */}
          <p className="text-center p-3">{s.secretFooter}</p>
        </div>
      </a>
    </div>
  );
}
