const ShimmerBtn = ({ title, classes }: { title: string; classes: string }) => {
  return (
    <button
      className={`inline-flex text-xs  animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100% text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50  ${classes}`}
    >
      {title}
    </button>
  );
};

export default ShimmerBtn;
