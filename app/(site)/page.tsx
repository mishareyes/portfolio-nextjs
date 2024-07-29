import { Button, Card, HiThere, Section, Socials } from "./components";
import { strings as s, designSummary, projectSummary } from "./constants";

export default async function Home() {
  const createMarkup = (html: string) => {
    return { __html: html };
  };

  return (
    <div className="flex flex-col">
      <Section id="home" bg="bg-home">
        <HiThere />
        <p
          className="text-center text-xl lg:mx-16 md:mx-4 sm:mx-0 mb-3"
          dangerouslySetInnerHTML={createMarkup(s.intro)}
        />
        <Socials />
      </Section>
      <Section id="about-me" bg="bg-aboutMe">
        <div className="flex flex-col md:flex-row md:flex-halves flex-whole">
          <div className="flex flex-col gap-4 items-start">
            <h1>{s.aboutMe.toUpperCase()}</h1>
            <p dangerouslySetInnerHTML={createMarkup(s.aboutMeInfo)} />
            <Button
              label={s.viewResume}
              color={"orange"}
              link={"/Misha-Reyes-Resume-2024.pdf"}
            />
          </div>
          <img
            src={"/headshot.png"}
            alt={`Misha Reyes Headshot`}
            className="object-contain md:w-2/5 md:max-w-sm md:pt-0 pt-8
            duration-500 hover:scale-105 hover:rotate-1"
          />
        </div>
      </Section>
      <Section id="projects" bg="bg-projects">
        <h1>{s.projects.toUpperCase()}</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {/* TODO: refactor into a map */}
          <Card type="project" {...projectSummary.magnumOpus} />
          <Card type="project" {...projectSummary.lighthouse} />
          <Card type="project" {...projectSummary.wavy} />
          <Card type="project" {...projectSummary.rescueAlerts} />
        </div>
      </Section>
      <Section id="designs" bg="bg-designs">
        <h1>{s.designs.toUpperCase()}</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          <Card type="design" {...designSummary.brewLab} />
          <Card type="design" {...designSummary.consensus} />
          <Card type="design" {...designSummary.hayag} />
          <Card type="design" {...designSummary.commissions} />
        </div>
      </Section>
      <Section id="contact" bg="bg-contact">
        <h1>{s.contact.toUpperCase()}</h1>
        <Socials />
      </Section>
      <div
        id="secret-footer"
        className="justify-center border-2 border-t-0 border-black duration-500 bg-flip cursor-pointer">
        <p className="text-center p-3">{s.secretFooter}</p>
      </div>
    </div>
  );
}
