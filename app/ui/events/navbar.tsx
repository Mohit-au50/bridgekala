type Props = {
  title: string;
  isActive: boolean;
  onClick: () => void;
};

export default function Navbar({ title, isActive, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive ? "bg-primary text-white" : ""
      } cursor-pointer border-l-2 border-r-2 border-primary p-4 py-2.5 text-primary outline-none`}
    >
      {title}
    </button>
  );
}
