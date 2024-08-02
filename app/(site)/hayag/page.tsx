import {
  BackButton,
  Gallery,
  MySocials,
  Paragraph,
  Social,
} from "../components";
import { hayag_strings as s } from "../constants";
import Image from "next/image";

export default async function Page() {
  return (
    <>
      <section id={s.title}>
        <BackButton returnTo="/#designs" />
        <div className="bg-projectTitle bg-contain bg-center bg-no-repeat p-12 place-content-center">
          <h1 className="lg:text-7xl md:text-5xl text-4xl">
            {s.title.toUpperCase()}
          </h1>
          <div className="flex justify-center gap-4">
            <Social link={s.website} type="website" size="medium" />
            <Social link={s.instagram} type="instagram" size="medium" />
            <Social link={s.facebook} type="facebook" size="medium" />
          </div>
        </div>
        <Paragraph>{s.par[0]}</Paragraph>
        <Paragraph>{s.par[1]}</Paragraph>
        <div className="flex justify-center">
          <Image
            src={s.featured_project[0].src}
            width={400}
            height={400}
            alt={s.featured_project[0].alt}
          />
        </div>
        <Paragraph>{s.par[2]}</Paragraph>
        <Gallery images={s.gallery} />
        <Paragraph>{s.par[3]}</Paragraph>
        <Paragraph>{s.par[4]}</Paragraph>
      </section>
      <div className="justify-center border-2 border-t-0 border-black bg-flip p-3">
        <MySocials size="small" />
      </div>
    </>
  );
}
