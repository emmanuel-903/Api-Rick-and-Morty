import React, { useEffect, useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Characters from './components/Character/Characters';
import Pagination from "./components/paginas/Pagination";
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [searchTerm, setSearchTerm] = useState(''); // Nuevo estado para el término de búsqueda

  const inicialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    let apiUrl = url;
    // Agregar el término de búsqueda al URL si se ha especificado
    if (searchTerm) {
      apiUrl += `?status=${searchTerm}`;
    }
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results); 
        setInfo(data.info);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(inicialUrl); 
  },[searchTerm]); // Vuelve a cargar los personajes cuando cambia el término de búsqueda

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Navbar brand="Rick and morty Emmanuelson" />
      <div className="container mt-5">
        {/* Agrega un input para el filtro */}
        <input
          type="text"
          placeholder="Ponte vio o muerto Status (alive/dead)"
          value={searchTerm}
          onChange={handleSearch}
          className="form-control mb-3"
        />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={() => fetchCharacters(info.prev)}
          onNext={() => fetchCharacters(info.next)}
        />
        <Characters characters={characters} />
        <Pagination />
      </div>
    </>
  );
}

export default App;
