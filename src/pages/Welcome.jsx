import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const routeVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
  },
};

const Welcome = () => {
  return (
    <motion.div
      className="welcome"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <Link to="/wish" replace>
        <img src="gift.gif" alt="Gift box" className="image" />
      </Link>

      <p>Open the gift</p>
      <p>There is something special for you.</p>
    </motion.div>
  );
};

export default Welcome;
