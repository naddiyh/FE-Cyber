import Image from 'next/image';
export const OverviewScan = () => {
  return (
    <div className="bg-primary-blue py-10 my-20 w-full">
      <div className="flex flex-col  md:flex-row  px-4 md:px-32 py-20 items-center  gap-12 md:gap-10">
        <Image
          src={'/images/scan.webp'}
          width={350}
          height={350}
          alt="scan"
          objectFit="cover"
          className="md:w-[450px] md:h-[250px]"
        />
        <div className="flex flex-col gap-2 md:gap-4">
          <h2 className="text-heading-s md:text-heading-m text-white font-semibold">
            Scan Scam AI Powered
          </h2>
          <p className="text-white text-text-m md:text-text-l text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            blanditiis praesentium, debitis quam nisi earum soluta voluptate et
            odio sed!
          </p>
        </div>
      </div>
    </div>
  );
};
