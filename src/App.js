import { Route } from "react-router-dom";
import IndexHome from "./pages/home/index";
import General from "./layouts/general";
import GalleryIndex from "./pages/gallery";

function App() {
  return (
    <>
      <General>
        <Route path="/">
          <IndexHome />
        </Route>
        <Route path="/gallery">
          <GalleryIndex />
        </Route>
      </General>
    </>
  );
}

export default App;
