import Image from "next/image";

export default function Card() {
  return (
    // <div className="card">
    //   <Image
    //     src="./public/magnum-opus.jpg"
    //     height="500"
    //     width="500"
    //     alt="Magnum Opus Project Image"
    //   />
    //   <h3>Magnum Opus</h3>
    //   <p className="subtext">
    //     A solana-based NFT project. I curated 80+ original art pieces. I also
    //     worked on coding the NFT minting page using JavaScript React and built
    //     the generator for 8000+ images, each with its own coded rarity.
    //   </p>
    <a href="https://www.magnum-opus.xyz/" target="_blank">
      <div className="flex justify-center content-center items-center w-56 h-12 bg-peach rounded-full mt-7 border-2 border-black text-xl">
        SEE MORE
      </div>
    </a>
    // </div>
  );
}
