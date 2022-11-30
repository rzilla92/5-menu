import { useState } from 'react'
import { Menu, Categories} from "./Components"
import items from "./Components/data"

function App() {
  const [menuItems ,setMenuitems] = useState(items)
  const [category,setCategory] = useState([])

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'/>
        </div>
        <Categories/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App
