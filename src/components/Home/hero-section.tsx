import Image from 'next/image';
import InputUsername from './input-username';

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <main className="bg-[#610C9F]">
      <div className="max-w-7xl mx-auto min-h-[100dvh] flex lg:flex-row items-center lg:justify-between px-8 xl:px-0">
        <div className="lg:w-1/2 text-[#dba9be] flex flex-col gap-y-6">
          <h1 className="text-5xl lg:text-7xl font-bold">
            Your online essence, captured in one link.
          </h1>
          <p className="text-lg lg:text-xl">
            Join millions of users leveraging Linkify for their bio link.
            Streamline your social media presence with one link, enabling
            seamless sharing of your content, creations, and products across
            platforms like Instagram, TikTok, Twitter, YouTube, and more.
          </p>
          <InputUsername />
        </div>

        <Image
          src="/img/hero_image.png"
          className="hidden lg:block"
          alt="Hero Image"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
};

export default HeroSection;
