import { Route, Switch } from "react-router-dom";
import AllmeetupsPage from "./pages/AllMeetUps";
import NewMeetupsPages from "./pages/NewMeetups";
import Favorites from "./pages/Favorites";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllmeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupsPages />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
