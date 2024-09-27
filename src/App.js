import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Home } from "./pages";

function App() {
  return <div className="App">
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      </Route>
    </Routes>
  </div>;
}

export default App;
