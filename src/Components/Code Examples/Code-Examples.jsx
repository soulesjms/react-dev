import React from "react";
import Pokedex from "./Pokedex/Pokedex";
import Store from "./Store/Store";
import {
  Switch,
  Route,
  Link,
  useRouteMatch
  // useParams
} from "react-router-dom";

function CodeExamples() {
  let match = useRouteMatch();
  // function Topic() {
  //   let { projectId } = useParams();
  //   return <h3>Requested topic ID: {projectId} </h3>;
  // }
  return (
    <div>
      <h2>Code Examples</h2>
      I'm currently in the process of developing this part of the site. Check
      back later! Hopefully it'll be more awesome by then. :D
      <ul>
        <li>
          <Link to={`${match.url}/pokedex`}>Pokedex</Link>
        </li>
        <li>
          <Link to={`${match.url}/store`}>Store</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/pokedex`} component={Pokedex} />
        <Route path={`${match.path}/store`} component={Store} />
        <Route path={match.path}>
          <h3>Please select a code example</h3>
        </Route>
      </Switch>
    </div>
  );
}
export default CodeExamples;
