'use client';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineLogin } from 'react-icons/ai';

export const Hero = () => {
  const notif = () => toast('halo nade');
  return (
    <div className="flex  px-4 md:px-32 md:pt-10 pt-28 flex-col-reverse md:flex-row gap-10 md:gap-24 items-center md:min-h-screen">
      <div className="flex flex-col gap-8 items-center md:items-start md:gap-6 ">
        <h2
          className="font-extrabold text-heading-s md:text-heading-l 
             bg-gradient-to-r from-[#050C9C] to-[#3572EF] 
             bg-clip-text text-transparent text-center md:text-left 
             leading-tight tracking-wider drop-shadow"
        >
          {' '}
          Temukan Potensi Penipuan <br />
          <span className="whitespace-nowrap"> Scan</span>
          <span> Detector CyberSolid</span>
        </h2>

        <Image
          src="/svg/hero.svg"
          width={290}
          height={290}
          alt="hero"
          objectFit="cover"
          className="md:w-[430px] md:hidden flex "
          priority
        />

        <div className="flex flex-col gap-4 text-center md:text-left ">
          <p className="text-text-m md:text-text-l">
            CyberSolid adalah platform inovatif yang menghadirkan solusi untuk
            meningkatkan keamanan dan efisiensi dunia siber dengan teknologi
            Generative AI
          </p>
          <p className="font-extralight text-xs md:text-text-m text-gray-500 italic">
            {' '}
            Bergabunglah dan jelajahi masa depan teknologi yang lebih aman!
          </p>
        </div>

        {/* Button */}
        <div className="flex  gap-6">
          <PrimaryButton onClick={notif} fullwidth={false}>
            Masuk
            <AiOutlineLogin className="h-5 w-5" />
          </PrimaryButton>
          <button
            className="border-primary-blue duration-300 transition-all transform hover:border-secondary-blue shadow-md text-primary-blue hover:text-white hover:bg-secondary-blue border rounded-2xl px-6"
            onClick={notif}
          >
            Jelajahi
          </button>
        </div>
        <Toaster />
      </div>

      {/* Right Section */}
      <Image
        src="/svg/hero.svg"
        width={290}
        height={290}
        alt="hero"
        objectFit="cover"
        className="md:w-[430px] md:flex hidden "
        priority
      />
    </div>
  );
};
