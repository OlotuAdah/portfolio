import { MouseEventHandler } from "react";

const MagicButton = ({
  title,
  onMouseEnter,
  onMouseLeave,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative inline-flex h-12  animate-shimmer overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 transition duration-300 ease-in-out hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.3)] hover:scale-105 ${otherClasses}`}
    >
      {/* Outer spinning gradient effect */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* Inner button content */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
      >
        <span>{position === "left" && icon}</span>
        {title}
        <span>{position === "right" && icon}</span>
      </span>
    </button>
  );
};

export default MagicButton;
      