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
        <ul className='list-group'>
          {cars.map(car => <li key={car.id} className='list-group-item'> {car.brand} {car.model} </li>)}
        </ul>
      </div>
    </>
  )
}

export default App
