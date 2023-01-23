import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioLanding from "./pages/PortfolioLanding";
export default function App() {
  return (
    <>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            element={<PortfolioLanding />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
