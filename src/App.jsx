import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card'

function App() {
  const [attori, setAttori] = useState([])
  const [attrici, setAttrici] = useState([])
  const [totale, setTotale] = useState([])
  // Effettua il fetch solo una volta
  useEffect(() => {
    fetchAttori();
    fetchAttrici();
  }, []);

  // Aggiorna 'totale' quando cambiano attori o attrici
  useEffect(() => {
    setTotale([...attori, ...attrici]);
  }, [attori, attrici]);

  function fetchAttori() {
    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then((resp) => {
        setAttori(resp.data)
      })
  }
  function fetchAttrici() {
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
      .then((resp) => {
        setAttrici(resp.data)
      })
  }
  console.log(totale)
  return (
    <>
      <div className="container py-5">
        <h1>Tutti i personaggi</h1>
        <div className="card-list">
          {/* {attori.map((attore) => ( primo metodo, stmpando attori e attrici separate)
            <Card attore={attore} key={attore.id} />
          ))}
          {attrici.map((attrice) => (
            <Card attore={attrice} key={attrice.id} />
          ))}
          {totale.map((curElem) => (
            <h2>{curElem.name}</h2>
          ))} */}

          {/* SECONDO METODO CON UN SOLO MAP */}
          {totale.map((curElem) => (
            <Card attore={curElem} key={curElem.id} />
          ))}
          {totale.map((curElem) => (
            <h2>{curElem.name}</h2>
          ))}

        </div>
      </div>
    </>
  )
}

export default App
