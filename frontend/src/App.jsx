import { useState, useEffect } from 'react'
import carsService from './services/cars'

const App = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    carsService.getAllCars().then(result => {
      setCars(result)
    })
  }, [])

  return (
    <>
      <div>
        <ul>
          {cars.map(car => <li key={car.id}> {car.brand} {car.model} </li>)}
        </ul>
      </div>
    </>
  )
}

export default App
