import React from "react";
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home";
import Music from "./components/Music";
import Video from "./components/Video";
import Chart from "./components/Chart";
import Blog from "./components/Blog";


function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/music" component={Music} />
        <Route path="/video" component={Video} />
        <Route path="/blog" component={Blog} />
        <Route path="/chart" component={Chart} />
      </Switch>
    </div>
  );
}

export default Routes;
