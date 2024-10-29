import { FaLocationArrow } from "react-icons/fa";

interface ChatBubbleProps {
  containerClasses: string;
  chatBubbleTrailClasses: string;
  chatBubbleClasses: string;
}

const ChatBubble = ({
  chatBubbleClasses,
  chatBubbleTrailClasses,
  containerClasses,
}: ChatBubbleProps) => {
  return (
    <div className={containerClasses}>
      <FaLocationArrow className={chatBubbleTrailClasses} />
      <div className={chatBubbleClasses}></div>
    </div>
  );
};

export default ChatBubble;
