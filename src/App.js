import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
