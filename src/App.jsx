import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Movies from "./pages/Movies"
import MovieDetails from "./pages/MovieDetails"
import AddMovie from "./pages/AddMovie"
import { useState } from "react"
import ContextLoader from "./contexts/contextLoader"
import ContextError from "./contexts/contextError"

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <ContextError.Provider value={{isError, setIsError}}>
      <ContextLoader.Provider value={{ isLoading, setIsLoading }}>

        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/">
                <Route index element={<Movies />} />
                <Route path="add-movie" element={<AddMovie />} />
                <Route path=":slug" element={<MovieDetails isLoading={setIsLoading} />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>

      </ContextLoader.Provider>
    </ContextError.Provider>
  )
}

export default App
