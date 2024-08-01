export default function Paragraph({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const createMarkup = (html: string) => {
    return { __html: html };
  };
  return (
    <p className={className} dangerouslySetInnerHTML={createMarkup(children)} />
  );
}
