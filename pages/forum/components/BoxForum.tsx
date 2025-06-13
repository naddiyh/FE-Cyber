import Image from 'next/image';
import { IForm } from '@/types/IForm';
import { BiSolidMessageDetail } from 'react-icons/bi';
import { BiSolidLike } from 'react-icons/bi';
export const BoxForum: React.FC<IForm> = ({
  name,
  status,
  comment,
  profile,
}) => {
  return (
    <div className="shadow-xl px-4 py-6 rounded-xl ">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 md:flex-row ">
          <Image
            src={profile}
            alt=""
            width={50}
            height={50}
            objectFit="cover"
            className="rounded-full"
          />
          <div className="flex flex-col gap-1 ">
            <p className="text-text-s">{name}</p>
            <p className="text-text-s">{status}</p>
          </div>
        </div>
        <p className="text-text-s md:text-text-m  ">{comment}</p>
        <div className="flex flex-row gap-2 justify-end items-center">
          <div className="flex gap-1 items-center justify-center">
            <p className="text-text-s">100</p>

            <BiSolidLike className="w-5 h-5 text-primary-blue" />
          </div>
          <div className="flex gap-1 items-center justify-center">
            <p className="text-text-s">10</p>

            <BiSolidMessageDetail className="h-5 w-5 text-primary-blue" />
          </div>
        </div>
      </div>
    </div>
  );
};

// export const BoxForum= ( props: IForm) => {
//     const { name, status, comment, profile } = props;
//     return (
//       <div className="shadow-xl p-4 rounded-xl">
//         <div className="flex flex-col gap-2">
//           <div className="flex flex-col gap-2 md:flex-row ">
//             <Image
//               src={profile}
//               alt=""
//               width={80}
//               height={80}
//               objectFit="cover"
//               className="rounded-full"
//             />
//             <div className="flex flex-col gap-2 ">
//               <p>{name}</p>
//               <p>{status}</p>
//             </div>
//           </div>
//           <p className="text-text-m md:text-text-l  ">{comment}</p>
//           <div>
//             <div>love</div>
//             <div>reply</div>
//           </div>
//         </div>
//       </div>
//     );
//   };
