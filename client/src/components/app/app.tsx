import React from "react";
import { AppWrapper } from "./styles";
import Loading from "../loading/loading";

const Home = React.lazy(() => import("../../pages/home/home"));

export default function App() {
  return (
    <AppWrapper>
      <React.Suspense fallback={<Loading />}>
        <Home />
      </React.Suspense>
    </AppWrapper>
  );
}
