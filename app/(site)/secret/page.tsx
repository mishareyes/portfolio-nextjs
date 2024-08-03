import {
  BackButton,
  Gallery,
  MySocials,
  Paragraph,
  Social,
  Tag,
} from "../components";
import { secret_strings as s } from "../constants";

type linkedTitleProps = {
  link: string;
  text: string;
  type:
    | "email"
    | "instagram"
    | "facebook"
    | "linkedin"
    | "github"
    | "website"
    | "youtube"
    | "figma";
};

export default async function Page() {
  const LinkedTitle = ({ link, text, type }: linkedTitleProps) => {
    return (
      <div className="flex flex-row items-center gap-2">
        <h2 className="justify-start">{text}</h2>
        <Social type={type} link={link} size="medium" />
      </div>
    );
  };

  return (
    <>
      <section id={s.title}>
        <BackButton />
        <div className="bg-projectTitle bg-contain bg-center bg-no-repeat p-12 place-content-center">
          <h1 className="lg:text-7xl md:text-5xl text-4xl">
            {s.title.toUpperCase()}
          </h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {s.tech.map((item, index) => (
            <Tag label={item} colorIndex={index} key={index} />
          ))}
        </div>
        <Paragraph>{s.par[0]}</Paragraph>
        <Paragraph>{s.par[1]}</Paragraph>

        <h2 className="justify-start">{s.design.toUpperCase()}</h2>
        <Paragraph>{s.par[2]}</Paragraph>
        <Paragraph>{s.par[3]}</Paragraph>
        <Paragraph>{s.par[4]}</Paragraph>

        <LinkedTitle
          link="https://www.figma.com/design/tF38iAsXksRbqjhoX9mFr1/Portfolio?node-id=4-92&t=kqV64SNRrY2oUZnf-1"
          type="figma"
          text={s.prototype.toUpperCase()}
        />
        <Paragraph>{s.par[5]}</Paragraph>
        <Gallery images={s.featured_project} columns={2} />

        <LinkedTitle
          link="https://github.com/mishareyes/portfolio-website"
          text={s.code1.toUpperCase()}
          type="github"
        />
        <Paragraph>{s.par[6]}</Paragraph>
        <Paragraph>{s.par[7]}</Paragraph>

        <LinkedTitle
          link="https://github.com/mishareyes/portfolio-nextjs"
          text={s.code2.toUpperCase()}
          type="github"
        />
        <Paragraph>{s.par[8]}</Paragraph>
        <Paragraph>{s.par[9]}</Paragraph>
        <Paragraph>{s.par[10]}</Paragraph>
        <Paragraph>{s.par[11]}</Paragraph>
        <Paragraph>{s.par[12]}</Paragraph>
        <hr className="border-t-4 border-dotted border-orange-300" />
        <Paragraph>{s.par[13]}</Paragraph>
      </section>
      <div className="justify-center border-2 border-t-0 border-black bg-flip p-3">
        <MySocials size="small" />
      </div>
    </>
  );
}
