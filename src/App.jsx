import { useState } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  const msg = 'Bienvenido, Alan';

  return (
    <>
      <Navbar />
      <ItemListContainer message={msg}/>
    </>
  )
}

export default App
