import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loading from "./pages/Loading";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <AnimatePresence>
          <AnimatedRoutes />
        </AnimatePresence>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
