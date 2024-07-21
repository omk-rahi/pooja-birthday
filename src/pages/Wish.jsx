import { motion } from "framer-motion";

import Card from "../components/Card";
import Firework from "../components/Firework";

const routeVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  final: {
    opacity: 1,
    scale: 1,
  },
};

const Wish = () => {
  return (
    <motion.div variants={routeVariants} initial="initial" animate="final">
      <Firework />
      <Card />
      <audio src="song.mp3" autoPlay loop></audio>
    </motion.div>
  );
};

export default Wish;
