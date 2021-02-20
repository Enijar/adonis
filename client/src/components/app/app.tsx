import React from "react";
import { Route, Switch } from "react-router-dom";
import { AppWrapper } from "./styles";
import Loading from "../loading/loading";

const Home = React.lazy(() => import("../../pages/home/home"));

export default function App() {
  return (
    <AppWrapper>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </React.Suspense>
    </AppWrapper>
  );
}
