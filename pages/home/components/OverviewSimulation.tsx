'use client';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import Image from 'next/image';
export const OverviewSimulation = () => {
  return (
    <div className=" px-4 py-16 flex w-full md:px-32 ">
      <div className="flex flex-row items-center gap-20 ">
        <Image
          src="/images/simulation.png"
          alt="simulation"
          width={650}
          height={650}
          objectFit="cover"
          objectPosition="top"
        />

        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-heading-s md:text-heading-m">
            Simulasi Scam
          </h2>
          <p className="text-text-m md:text-text-l">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            pariatur unde nesciunt delectus accusantium rerum dolores ut
            aspernatur quis quibusdam!
          </p>
          <div className="flex flex-col gap-4 ">
            <div className="flex  items-center gap-2">
              <Image src="/svg/check.svg" width={45} height={45} alt="check" />
              <p className="text-text-l font-medium">Leaderboard Challenge</p>
            </div>
            <div className="flex  items-center gap-2">
              <Image src="/svg/check.svg" width={45} height={45} alt="check" />
              <p className="text-text-l font-medium">Leaderboard Challenge</p>
            </div>
            <div className="flex  items-center gap-2">
              <Image src="/svg/check.svg" width={45} height={45} alt="check" />
              <p className="text-text-l font-medium">Leaderboard Challenge</p>
            </div>
          </div>
          <div className="justify-end flex">
            <PrimaryButton fullwidth={false}>
              Coba Simulasi
              <FaArrowUpRightFromSquare />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};
