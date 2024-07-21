import { TypeAnimation } from "react-type-animation";

const AnimatedType = () => {
  return (
    <TypeAnimation
      sequence={[
        "Happy Birthday, Pooja",
        2000,
        "जन्मदिन मुबारक हो, पूजा",
        2000,
        "જન્મદિવસ ની શુભકામના, પૂજા",
        2000,
      ]}
      repeat={Infinity}
    />
  );
};

export default AnimatedType;
