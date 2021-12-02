import React, {useEffect, useState} from 'react'; 
import Loading from './components/Loading'; 
import Tours from './components/Tours'; 
 
const url = 'https://course-api.com/react-tours-project'; 
 
function App() { 
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(result => setData(result))
        .then(() => setIsLoading(false))
        .catch(error => console.log(error))
    }, [])

      
    return (
      <div className="section">
        <main>
          {isLoading ? <Loading /> :
          data.length > 0 ? (
            <ul>
              <div className="title">
                <h2>Our Tours </h2>
                <hr className="underline" />
              </div>
              {data.map(tour => <Tours key={tour.id} tour={tour} setData={setData}/>)}
            </ul>
            ) : (
              <div className="title">
                <h3>No More Tours Remaining</h3>
                <a className="btn" href="/">Refresh</a>
              </div>
            )
        }
        </main>  
      </div>
    )
} 
 
 
export default App; 
