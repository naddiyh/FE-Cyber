interface PrimaryProps {
  children: React.ReactNode;
  fullwidth?: boolean;
  onClick?: () => void;
}
const PrimaryButton = (props: PrimaryProps) => {
  const { children, fullwidth = false, onClick } = props;
  const fullWidth = fullwidth ? 'w-full' : 'w-fit';

  return (
    <button
      onClick={onClick}
      className={`${fullWidth} text-text-s gap-2 md:text-text-m flex items-center justify-center rounded-2xl shadow-md bg-primary-blue hover:bg-primary-blue/75 px-6 py-2 text-white duration-300`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
