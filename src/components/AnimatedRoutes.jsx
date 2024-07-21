import { lazy } from "react";

import { Routes, Route, useLocation } from "react-router-dom";

const Welcome = lazy(() => import("../pages/Welcome"));
const Wish = lazy(() => import("../pages/Wish"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route index element={<Welcome />} />
      <Route path="/wish" element={<Wish />} />
    </Routes>
  );
};

export default AnimatedRoutes;
