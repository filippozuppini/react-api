import { useState, useEffect } from "react";

function App() {
  
  const [actorsData, setActorsData] = useState([])


  function fetchData() {
    const url = 'https://lanciweb.github.io/demo/api/actors/';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setActorsData(data)
      })
  }

  useEffect(fetchData, [])



  return (
    <>
      <div className="heading-title">
        <h1>Actors</h1>
      </div>

      <div className="container">
        <div className="row g-3">

          {
            actorsData.map(actor => (
              <div className="col-12 col-sm-6 col-md-4" key={actor.id}>
                <div className="card">
                  <img className="card-img-top" src={actor.image} alt="foto-profilo" />
                  <div className="card-body">
                    <h4 className="card-title">{actor.name}</h4>
                    <p className="card-text">{actor.birth_year}</p>
                    <p className="card-text">{actor.death_year}</p>
                    <p className="card-text">{actor.nationality}</p>
                    <p className="card-text">{actor.known_for}</p>
                    <p className="card-text">{actor.awards}</p>
                    <p className="card-text">{actor.biography}</p>
                  </div>
                </div>

              </div>
            ))
          }



        </div>
      </div>

    </>
  )
}

export default App
