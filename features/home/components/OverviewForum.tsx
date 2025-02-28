import PrimaryButton from '@/components/buttons/PrimaryButton';

export const OverviewForum = () => {
  return (
    <div className="relative px-4 w-full md:px-32 ">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col">
          <h2 className="font-semibold text-heading-m">Forum Diskusi</h2>
          <p className="text-text-l ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            veniam molestias reiciendis at neque fugiat sit distinctio ea omnis
            saepe?
          </p>
          <PrimaryButton fullwidth={false}>Join Discussion</PrimaryButton>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};
