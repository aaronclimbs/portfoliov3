import { animateScroll as scroll } from "react-scroll";
import { FaChevronUp } from "react-icons/fa";
import { GoToButton, GoToContainer } from "./GoToElements";
import { useScroll } from "../../Hooks/useScroll";

const GoToTop = () => {
  const handleClick = () => {
    scroll.scrollToTop();
  };

  const scrollNav = useScroll();

  return (
    <GoToContainer scrollNav={scrollNav}>
      <GoToButton scrollNav={scrollNav}>
        <FaChevronUp onClick={handleClick} size={30} />
      </GoToButton>
    </GoToContainer>
  );
};

export default GoToTop;
