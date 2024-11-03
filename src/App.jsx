import { useState, useEffect } from 'react'
import Buttons from './components/Buttons'
import Search from './components/Input'
import NavBar from './components/NavBar'
import { Card } from "./components/Card"
import axios from 'axios'
import fetchData from '../utils/fetchData'
import './App.css'




function App() {
  const [categories, setCategories] = useState([])
  const [query, setQuery] = useState("mountain")

  useEffect(() => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    fetchData(url)
      .then((data) => setCategories(data.data.photos))


  }, [query])
  console.log(categories)
  return (
    <>
      <NavBar />
      <div className='bg-violet-300 pt-5'>
        <Search setQuery={setQuery}/>
        <Buttons setQuery={setQuery}/>
      </div>
      <section className='gap-3 flex flex-wrap bg-violet-300 justify-center'>
        {categories && categories?.photo?.map((data) => { return (<Card key={data?.id} farm={data?.farm} id={data?.id} secret={data?.secret} server={data?.server} />) }

        )
        }
      </section>

    </>
  )
}





export default App

