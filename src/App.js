import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { About, Blog, Contact, Home, Portfolio, Services } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route index path="about" element={<About />} />
          <Route index path="services" element={<Services />} />
          <Route index path="portfolio" element={<Portfolio />} />
          <Route index path="blog" element={<Blog />} />
          <Route index path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
