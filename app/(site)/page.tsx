import { Card, Socials } from "./components";
import { strings as s, designSummary, projectSummary } from "./constants";

export default async function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Socials />
      <div className="flex flex-col justify-center gap-4">
        <h1 className="flex font-serif text-7xl font-bold tracking-widest justify-center">
          {s.projects.toUpperCase()}
        </h1>
        <div className="bg-[url('../public/layout/projects.png')] grid grid-cols-4 gap-6 auto-rows-fr">
          <Card type="project" {...projectSummary.magnumOpus} />
          <Card type="project" {...projectSummary.lighthouse} />
          <Card type="project" {...projectSummary.wavy} />
          <Card type="project" {...projectSummary.rescueAlerts} />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="flex font-serif text-7xl font-bold tracking-widest justify-center">
          {s.designs.toUpperCase()}
        </h1>
        <div className="bg-[url('../public/layout/designs.png')] grid grid-cols-4 gap-2">
          <Card type="design" {...designSummary.brewLab} />
          <Card type="design" {...designSummary.consensus} />
          <Card type="design" {...designSummary.hayag} />
          <Card type="design" {...designSummary.commissions} />
        </div>
      </div>
    </div>
  );
}
