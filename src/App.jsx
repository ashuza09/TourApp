import { useEffect, useState } from "react";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const removeItem = tours.filter((tour) => tour.id !== id )
    setTours(removeItem)
  }

  const fetchTour = async() =>{
      setLoading(true)
      try{
        const response = await fetch(url)
        const tours = await response.json()
        console.log(tours)
        setTours(tours)
      }catch(error){
        console.log(error);
      }
  }
  useEffect(()=>{
    fetchTour();
  },[])
  if(tours.length === 0){
    return <main>
      <div className="title">
        <h2>No tours left</h2>
        <button style={{marginTop:'2rem'}} className="btn" onClick={() => fetchTour()}>Refresh</button>
      </div>
    </main>
  }
  return <main>
    <Tours tours={tours} removeTour={removeTour} />
  </main>;
};
export default App;
