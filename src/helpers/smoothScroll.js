import { useRef } from "react";

const SmoothScrollTo = ({ targetId, children }) => {
  const scrollRef = useRef(null);

  const handleClick = () => {
    const element = document.getElementById(targetId);
    element.scrollIntoView({
      behavior: "smooth",
      //   block: "start",
    });
  };

  return (
    <div ref={scrollRef} onClick={handleClick}>
      {children}
    </div>
  );
};
export default SmoothScrollTo;
