import { BiScan } from 'react-icons/bi';

const HighligthObject = [
  { title: 'Scan a Second', icon: BiScan },
  { title: 'Scalable', icon: BiScan },
  { title: 'Faster scanner', icon: BiScan },
  { title: 'Scan a Second', icon: BiScan },
];

export const Highligth = () => {
  return (
    <div className="w-full px-4 mt-20 md:mt-0 md:mb-20 md:px-32 ">
      <div className="bg-gray-100 py-8 rounded-xl grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-4 items-center justify-center ">
        {HighligthObject.map((item) => (
          <div
            key={item.title}
            className="flex flex-row items-center md:pl-0 md:justify-center pl-4 gap-4 "
          >
            <item.icon className="h-10 w-10 md:h-16 md:w-16  text-primary-blue bg-blue-200 p-2 rounded-full" />
            <p className="text-text-l  text-primary-blue">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
