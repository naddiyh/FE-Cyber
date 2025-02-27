'use client';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';

export const Hero = () => {
  const notif = () => toast('halo nade');
  return (
    <div className="flex  px-4 md:px-32  flex-col-reverse md:flex-row md:gap-24 items-center min-h-screen ">
      <div className="flex flex-col gap-2 md:gap-6 text-left">
        <h2 className="font-bold text-heading-s md:text-heading-l">
          Selamat Datang di CyberSolid <br />
          Scan Detector Scam
        </h2>
        <div className="flex flex-col gap-2">
          <p className="text-text-m md:text-left text-justify md:text-text-l">
            CyberSolid adalah platform inovatif yang menghadirkan solusi terbaik
            untuk meningkatkan keamanan dan efisiensi dunia siber
          </p>
          <p className="font-extralight text-text-s md:text-text-m text-gray-500 italic">
            {' '}
            Bergabunglah dan jelajahi masa depan teknologi yang lebih aman!
          </p>
        </div>

        {/* Button */}
        <div className="flex  gap-6">
          <button
            className="border-primary-blue duration-300 transition-all transform hover:border-blue-500 hover:text-white hover:bg-blue-500 border rounded-2xl px-6"
            onClick={notif}
          >
            Jelajahi
          </button>
          <PrimaryButton onClick={notif} fullwidth={false}>
            Masuk
          </PrimaryButton>
        </div>
        <Toaster />
      </div>

      {/* Right Section - Image */}
      <Image
        src="/svg/hero.svg"
        width={300}
        height={300}
        alt="hero"
        className="md:w-[430px] h-[430px]  "
        priority
      />
    </div>
  );
};
