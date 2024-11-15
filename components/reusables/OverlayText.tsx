
const OverlayText = ({
  title,
  description,
  isVisible,
}: {
  title: string;
  description: string;
        isVisible: boolean;
}) => {
  return (
    <div
      className={`absolute inset-0 bg-white-100 rounded-xl text-justify text-[#000319] p-6 flex flex-col justify-center items-center z-20 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-sm lg:text-xl font-semibold mb-4">{title}</h2>
      <p className=" text-xs lg:text-base">{description}</p>
    </div>
  );
};

export default OverlayText