import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Movies from "./pages/Movies"
import MovieDetails from "./pages/MovieDetails"
function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/">
            <Route index element={<Movies />} />
            <Route path=":id" element={<MovieDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
