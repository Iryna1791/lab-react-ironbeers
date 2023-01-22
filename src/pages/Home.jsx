import beers from '../assets/beers.png';
import randombeer from '../assets/random-beer.png';
import newbeer from '../assets/new-beer.png';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
      <div className="card h-100">
        <img src={beers} className="card-img-top" alt="..."/>
        <h5 className="card-title">
          <Link to="/Beers">All Beers</Link>    
        </h5>
      </div>
        <div className="card h-100">
          <img src={randombeer} className="card-img-top" alt="..."/>
            <h5 className="card-title">
              <Link to="/random-beer">Random Beer</Link> 
            </h5>
        </div>
        <div className="card h-100">
          <img src={newbeer} className="card-img-top" alt="..."/>
            <h5 className="card-title">
              <Link to="/new-beer">New Beer</Link>
            </h5>
          </div>
    </div>
  )
}

export default Home;