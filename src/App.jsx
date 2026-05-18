import { useState, useEffect } from "react";

function App() {

  function fetchData(){
    const url = 'https://lanciweb.github.io/demo/api/actors/';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setActorsData(data)        
      })
  }

  useEffect(fetchData, [])


  const [actorsData, setActorsData] = useState([])

  return (
    <>
      <div className="heading-title">
        <h1>Actors</h1>
      </div>

      <div className="container">
        <div className="row g-3">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card">


              <img className="card-img-top" src="holder.js/100x180/" alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
                <p className="card-text">Text</p>
                <p className="card-text">Text</p>
                <p className="card-text">Text</p>
                <p className="card-text">Text</p>

              </div>

            </div>
            
          </div>
        </div>
      </div>

    </>
  )
}

export default App
