import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Movies from "./pages/Movies"
import MovieDetails from "./pages/MovieDetails"
import AddMovie from "./pages/AddMovie"
function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/">
            <Route index element={<Movies />} />
            <Route path=":id" element={<MovieDetails />} />
            <Route path="add-movie" element={<AddMovie />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
