import { Route } from "react-router-dom";
import IndexHome from "./pages/home/index";
import { useEffect } from "react";
import Web3 from "web3";
import General from "./layouts/general";

function App() {
  return (
    <>
      <General>
        <Route path="/" exact component={IndexHome} />
      </General>
    </>
  );
}

export default App;
