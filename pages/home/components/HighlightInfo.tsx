import { BiScan } from 'react-icons/bi';
import { FaSuperpowers } from 'react-icons/fa6';
import { FaSearchengin } from 'react-icons/fa6';
const HighligthObject = [
  { title: 'Scan a Second', icon: BiScan },
  { title: 'Simple, but powerful', icon: FaSuperpowers },
  { title: 'Faster scanner', icon: FaSearchengin },
  { title: 'Scan a Second', icon: BiScan },
];

export const Highligth = () => {
  return (
    <div className="w-full px-4 mt-20 md:mt-0 md:mb-20 md:px-32 ">
      <div className="  relative grid grid-cols-1 gap-10 md:grid-cols-4 items-center justify-center ">
        {HighligthObject.map((item) => (
          <div
            key={item.title}
            className="flex flex-col  md:flex-row items-center relative justify-center p-8 gap-4 border border-primary-blue  rounded-xl "
          >
            <item.icon className="h-10 -left-6 absolute w-10 md:h-14 md:w-14  text-white border  bg-primary-blue p-2 rounded-full" />
            <div className="flex flex-col gap-2">
              <p className="text-text-l  text-primary-blue">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
