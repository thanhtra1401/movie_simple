import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import "swiper/scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MainPageLayout from "./pages/MainPageLayout";
import ContentMain from "./components/layout/ContentMain";

import ContentCat from "./components/layout/ContentCat";
import ContentMovies from "./components/layout/ContentMovies";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <MainPageLayout>
              <ContentMain />
            </MainPageLayout>
          }
        ></Route>
        <Route path="/movies" element={<ContentMovies />}></Route>
        <Route path="/anime" element={<ContentCat type="anime" />}></Route>
        <Route
          path="/tv-series"
          element={<ContentCat type="tv series" />}
        ></Route>
        <Route path="/title/:movieId" element={<MovieDetailPage />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
