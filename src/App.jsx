import { useState } from 'react'
import { Menu, Categories} from "./Components"
import items from "./Components/data"

const allCategories =['All', ...new Set(items.map((item)=> item.category))]

function App() {
  const [menuItems ,setMenuitems] = useState(items)
  const [categories,setCategories] = useState(allCategories)


// function to filter "items" i.e useState contains filtered items
  const filterItems = (category) => {
    if(category=== 'All') {
      setMenuitems(items)
      return
    }
    const filtered = items.filter((item)=> item.category === category)
    setMenuitems(filtered)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'/>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App
