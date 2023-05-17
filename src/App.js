import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/movies" element={<MoviePage />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
