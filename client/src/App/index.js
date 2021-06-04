import { Switch, Route } from "react-router-dom";
import { LandingPage, Login } from "../routes";
import { getPageRoutingData } from "../helpers/navigation";
import Layout from "./layout/index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <ProtectedRoutes />
      </Switch>
    </div>
  );
}

const ProtectedRoutes = () => {
  const user = JSON.parse(localStorage.getItem("USER"));
  return (
    <Layout {...{ user }}>
      {getPageRoutingData().map((Parent) =>
        Parent.map((Child, i) => (
          <Route path={Child.path} key={"route: " + i}>
            <Child.Component {...{ user }} />
          </Route>
        ))
      )}
    </Layout>
  );
};

export default App;
