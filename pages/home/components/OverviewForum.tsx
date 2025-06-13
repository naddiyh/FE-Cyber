'use client';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import BoxForum from '@/pages/forum/components/BoxForum';

import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const OverviewForum = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const forumData = [
    {
      name: 'User 1',
      status: 'Active',
      comment:
        'Ini komentar pertama Lorem ipsum dolor sit amet consectetur adipisicing elit.sdsds',
      profile: '/',
    },
    {
      name: 'User 2',
      status: 'Inactive',
      comment:
        'Ini komentar kedua Lorem ipsum dolor sit amet consectetur adipisicing elit.sdsds',
      profile: '/',
    },
    {
      name: 'User 3',
      status: 'Active',
      comment:
        'Ini komentar ketiga Lorem ipsum dolor sit amet consectetur adipisicing elit.sdsds',
      profile: '/',
    },
  ];

  const handleNext = () => {
    if (currentIndex + 1 < forumData.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative px-4 w-full md:px-32 py-16">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-heading-s md:text-heading-m">
            Forum Diskusi
          </h2>
          <p className="text-text-m md:text-text-l">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            pariatur unde nesciunt delectus accusantium rerum dolores ut
            aspernatur quis quibusdam!
          </p>

          <PrimaryButton fullwidth={false}>
            Gabung Diskusi
            <FaArrowUpRightFromSquare />
          </PrimaryButton>
        </div>

        <div className="flex items-center justify-center">
          {/* Tombol Prev */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`rounded-full bg-primary-blue p-3 text-white transition-all ${
              currentIndex === 0
                ? 'cursor-not-allowed hidden'
                : 'hover:opacity-60'
            }`}
          >
            <FaAngleLeft />
          </button>

          {/* Forum Items */}
          <div className="relative w-[500px] overflow-x-hidden ">
            <div
              className=" flex gap-4 px-10 transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 400}px)` }}
            >
              {forumData.map((item, index) => {
                let opacityClass = 'opacity-100';
                if (index === currentIndex - 1 || index === currentIndex + 1) {
                  opacityClass = 'opacity-10 pointer-events-none';
                }
                return (
                  <div
                    key={index}
                    className={` w-[400px] h-[300px] flex-shrink-0 transition-opacity duration-500 ${opacityClass}`}
                  >
                    <BoxForum
                      name={item.name}
                      status={item.status}
                      comment={item.comment}
                      profile={item.profile}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tombol Next */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= forumData.length - 1}
            className={`rounded-full  bg-primary-blue p-3 text-white transition-all ${
              currentIndex >= forumData.length - 1
                ? 'cursor-not-allowed hidden'
                : 'flex hover:opacity-60'
            }`}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverviewForum;
