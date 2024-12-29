import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { About, Blog, BlogPost, Contact, Home, Portfolio, Services } from "./pages";
import ScrollToTop from "./helpers/ScrollToTop"

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
