import { useState, useEffect } from 'react'
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Beer() {
  const [beer, setBeer] = useState({});
  const { beerId } = useParams();

  useEffect(() => {                               
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log('response.data', response.data);
        setBeer(response.data)
      });
  }, [beerId] );

  return (
    <div>
      <Header />
      <div className='container'>
      <div className='row'>
      <div className="card mb-3"/>
        <div className="row g-0">
        <div className="col-md-4">
          <img src={beer.image_url} className="img-fluid rounded-start" alt="..." style={{objectFit: 'scale-down', width: '250px', height: '250px'}}/>
        </div>
          <h5 className="card-title text-uppercase fw-bold">Name: {beer.name}</h5>
          <p className="card-text">Tagline: {beer.tagline}</p>
          <p className="card-text">First Brewed: {beer.first_brewed}</p>
          <p className="card-text">Attenuation Level: {beer.attenuation_level}</p>
          <p className="card-text">Description: {beer.description}</p>
          <p className="card-text">Contributed By: <small className="text-muted">{beer.contributed_by}</small></p>
        </div>
    </div>
    </div>
        
        </div>
  )
}

export default Beer;