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
  useEffect(() => {
    fetchAttori();
  }, [])

  function fetchAttori() {
    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then((resp) => {
        setAttori(resp.data)
      })
  }

  return (
    <>
      <div className="container py-5">
        <h1>Tutti i personaggi</h1>
        <div className="card-list">
          {attori.map((attore) => (
            <Card attore={attore} key={attore.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
