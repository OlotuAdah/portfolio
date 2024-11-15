import { FaLocationArrow } from "react-icons/fa6";

const LiveSite = ({title}: {title:string}) => {
    return (
      <div className="flex justify-center items-center">
        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
          {title}
        </p>
        <FaLocationArrow className="ms-3" color="#CBACF9" />
      </div>
    );
}

export default LiveSite