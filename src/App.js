import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import history from "./history";
// const BirdRecognition = React.lazy(() =>
//   import("./views/BirdRecognition/BirdRecognition")
// );

import BirdRecognition from "./views/bird-recognition/BirdRecognition";
import GoogleMaps from "./views/google-maps/GoogleMaps";
import UplaodImg from "./reusable/UploadImg";

const App = () => {
  //   const loading = (
  //     <div className="pt-3 text-center">
  //       <div className="sk-spinner sk-spinner-pulse"></div>
  //     </div>
  //   );
  return (
    <Router history={history}>
      {/* <React.Suspense fallback={loading}> */}
      <Switch>
        <Route
          exact
          path="/recognition"
          name="Bird Recognition"
          render={(props) => <BirdRecognition {...props} />}
        />
      </Switch>
      <Switch>
        <Route
          exact
          path="/maps"
          name="Bird Map"
          render={(props) => <GoogleMaps {...props} />}
        />
      </Switch>
      <Switch>
        <Route
          exact
          path="/upload"
          name="Bird Upload"
          render={(props) => <UplaodImg {...props} />}
        />
      </Switch>
      {/* </React.Suspense> */}
    </Router>
  );
};

export default App;
