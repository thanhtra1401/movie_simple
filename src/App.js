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
import ContentTvSeries from "./components/layout/ContentTvSeries";
import TvDetailPage from "./pages/TvDetailPage";

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
        <Route path="/tv-series" element={<ContentTvSeries />}></Route>
        <Route path="/movie/:movieId" element={<MovieDetailPage />}></Route>
        <Route path="/tv-series/:tvId" element={<TvDetailPage />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
