import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from '../components/Card'

const Home = () => {
    const [planets, setPlanets] = useState ([])
    useEffect (()=>{
        const getData = async ()=>{
           const {data} = await axios ('https://swapi.dev/api/planets')
           setPlanets(data.results)
        }
        getData()
    }, [])
    
    
  return (
    <div>
        {
            planets.map((el, idx)=>(
                <Card key ={idx} name ={el.name} climate = {el.climate} />
            ))
        }
    </div>
  )
}

export default Home

