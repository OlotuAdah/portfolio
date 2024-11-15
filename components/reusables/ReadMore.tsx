
const ReadMore = ({ title, text }: { title: string, text:string }) => {
  return (
    <div
      className="lg:tooltip z-[]2000px"
      data-tip="Streamlines the financial reconciliation and payment process, enabling efficient and accurate settlements for businesses. Designed to handle high volumes with precision, it ensures timely payouts and transparency across merchant networks."
    >
      <button className="btn">Hover me</button>
    </div>
  );
};

export default ReadMore
// const ReadMore = ({ title, text }: { title: string, text:string }) => {
//   return (
//       <MagicButton handleClick={()=>alert("Wassup!")}  title="Read More"/>
//   );
// };

// export default ReadMore