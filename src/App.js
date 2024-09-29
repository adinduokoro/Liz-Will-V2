import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Contact, Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route index path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
