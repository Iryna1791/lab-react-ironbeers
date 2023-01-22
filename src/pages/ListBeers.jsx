import Header from '../components/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ListBeers() {
const [beers, setBeers] = useState([]);

useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response) => setBeers(response.data));
}, [])

    
return (
<div>
<Header />
    {beers.map((beer) => {

        return(
            <div className="col" key={beer._id}>
            <img src={beer.image_url} className="img-fluid rounded-start" alt="..." style={{objectFit: 'scale-down', width: '150px', height: '150px'}}/>
                <Link to={`/beers/${beer._id}`}>Name: {beer.name}</Link>
            <p className="card-text">Tagline: {beer.tagline}</p>
            <p className="card-text">Contrubuted By: <small className="text-muted">{beer.contributed_by}</small></p>
        </div>
     )
    })}
</div>
)
}

export default ListBeers