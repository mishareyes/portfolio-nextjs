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
          className="text-center text-xl mx-16"
          dangerouslySetInnerHTML={createMarkup(s.intro)}
        />
        <Socials />
      </Section>
      <Section id="about-me" bg="bg-aboutMe">
        <h1>{s.aboutMe.toUpperCase()}</h1>
        <p>{s.aboutMeInfo}</p>
        <Button label={s.downloadResume} color={"orange"}></Button>
      </Section>
      <Section id="projects" bg="bg-projects">
        <h1>{s.projects.toUpperCase()}</h1>
        {/* todo: fix grid wrapping */}
        <div className="grid grid-cols-4 gap-4 auto-rows-auto">
          <Card type="project" {...projectSummary.magnumOpus} />
          <Card type="project" {...projectSummary.lighthouse} />
          <Card type="project" {...projectSummary.wavy} />
          <Card type="project" {...projectSummary.rescueAlerts} />
        </div>
      </Section>
      <Section id="designs" bg="bg-designs">
        <h1>{s.designs.toUpperCase()}</h1>
        <div className="grid grid-cols-4 gap-4">
          <Card type="design" {...designSummary.brewLab} />
          <Card type="design" {...designSummary.consensus} />
          <Card type="design" {...designSummary.hayag} />
          <Card type="design" {...designSummary.commissions} />
        </div>
      </Section>
    </div>
  );
}
