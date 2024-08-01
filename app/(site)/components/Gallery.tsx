import Image from "next/image";

type galleryImage = {
  src: string;
  alt: string;
};

type galleryProps = {
  images: galleryImage[][];
};

export default function Gallery({ images }: galleryProps) {
  return (
    <div className="flex flex-wrap place-content-center">
      {images.map((column, colIndex) => (
        <div
          key={colIndex}
          className="lg:flex-[22%] lg:max-w-[22%] p-1 md:flex-[48%] md:max-w-[48%] flex-[100%] max-w-[100%]">
          {column.map((image, imgIndex) => (
            <Image
              key={imgIndex}
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={400}
              height={400}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
