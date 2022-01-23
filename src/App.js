import { Route, Routes } from "react-router-dom";
import IndexHome from "./pages/home/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<IndexHome/>} />
      </Routes>
    </>
  );
}

export default App;
