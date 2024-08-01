import { BackButton, MySocials, Paragraph, Social } from "../components";
import { brewLab_strings as s } from "../constants";
import Image from "next/image";

export default async function Page() {
  //   possible optimization: general layout for all pages that incl background, back btn, socials footer
  return (
    <>
      <section id={s.title}>
        <BackButton />
        <div className="bg-projectTitle bg-contain bg-center bg-no-repeat p-12 place-content-center">
          <h1>{s.title.toUpperCase()}</h1>
          <div className="flex justify-center">
            <Social link={s.instagram} type="instagram" size="medium" />
          </div>
        </div>
        <Paragraph>{s.par[0]}</Paragraph>
        <Paragraph>{s.par[1]}</Paragraph>
        <div className="flex flex-wrap flex-row justify-center align-center gap-2">
          {s.featured_project.map((img, index) => (
            <Image
              key={index}
              src={img.src}
              width={350}
              height={350}
              alt={img.alt}
            />
          ))}
        </div>
        <Paragraph>{s.par[2]}</Paragraph>
        <div className="md:grid md:gap-2 md:grid-cols-2 lg:grid-cols-4">
          {s.gallery.map((photo) => {
            return (
              <Image
                width={400}
                height={400}
                className="w-full object-cover"
                src={photo.src}
                alt={photo.alt}
              />
            );
          })}
        </div>
        <Paragraph>{s.par[3]}</Paragraph>
        <Paragraph>{s.par[4]}</Paragraph>
      </section>
      <div className="justify-center border-2 border-t-0 border-black bg-flip p-3">
        <MySocials size="small" />
      </div>
    </>
  );
}
