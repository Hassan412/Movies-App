import { useState, useEffect } from 'react';
import './App.css'
import { Navbar } from "./components";
import searchicon from './search.svg'
import Moviecard from './Moviecard';
const url = 'https://imdb8.p.rapidapi.com/auto-complete?';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [isloading, setisloading] = useState(false)

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '889152a9a5mshf4e59bc637e6377p1ab975jsnb06f19a4e525',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

const netflixdata = async (title) => {
  setisloading(true)
  try {
    const response = await fetch(`${url}q=${title}`,options);
    const result = await response.json();
    setMovies(result.d)
    console.log(result.d)
  } catch (error) {
    console.error(error);
  } finally {
    setisloading(false)
  }
}

 
  useEffect(() => {
    netflixdata('avengers')
  }, [])
  const handlekeydown = (e) => {
    if (e.key === "Enter") {
      netflixdata(searchTerm)
    }
  }
  const handlechange = (e) => {
    setsearchTerm(e.target.value)
  }
  return (
    <div className="app">
      <Navbar/>
      <div className="search">
        <input type="text"
          placeholder='Search for movies'
          value={searchTerm}
          onChange={handlechange}
          onKeyDown={handlekeydown}
        />
        <button disabled = {isloading}>
          {isloading ? "Searching" :
        <img
          src={searchicon}
          alt="search"
          onClick={() => netflixdata(searchTerm)} />
          }
          </button>
      </div>
      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <Moviecard key={crypto.randomUUID()} movie={movie}  />
              ))
              }
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found </h2>
            </div>
          )
      }
    </div>
  );
}

export default App;

