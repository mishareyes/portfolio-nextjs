import Image from "next/image";

type galleryImage = {
  src: string;
  alt: string;
};

type galleryProps = {
  images: galleryImage[][];
  columns?: 2 | 4;
};

export default function Gallery({ images, columns = 4 }: galleryProps) {
  let className =
    columns === 4
      ? "lg:flex-[22%] lg:max-w-[22%] md:flex-[48%] md:max-w-[48%] max-w-[100%]"
      : "md:flex-[48%] md:max-w-[48%] max-w-[100%]";

  return (
    <div className="flex flex-wrap justify-center">
      {images.map((column, colIndex) => (
        <div key={colIndex} className={className}>
          {column.map((image, imgIndex) => (
            <Image
              key={imgIndex}
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
              className="p-1 justify-self-center"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
