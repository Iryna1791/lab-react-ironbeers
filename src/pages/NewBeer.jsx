import {useState} from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewBeer() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState("");
    const [contributedBy, setContributedBy] = useState("");
    

    const handleSubmit =  (e) => {
        e.preventDefault();
        const addBeer = {
            name, tagline, description,
            first_brewed : firstBrewed,
            brewers_tips : brewersTips,
            attenuation_level : attenuationLevel,
            contributed_by : contributedBy
        }
        axios
        .post("https://ih-beers-api2.herokuapp.com/beers/new", addBeer)
        .then(() => {
            setName(''); setTagline(''); setDescription(''); setFirstBrewed(''); setBrewersTips(''); setAttenuationLevel(''); setContributedBy('');
          navigate("/beers");
        });
    };


    return (
        
    <div>
        <Header />
        <div className='container mt-3'>
            <h2>Add New Beer</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                <label>Name</label>
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} name="name" className="form-control" placeholder="Name"/>
                </div>
                <div className="form-floating mb-3">
                <label>Tagline</label>
                    <input type="text" value={tagline} onChange={(e)=> setTagline(e.target.value)} name="tagline" className="form-control" placeholder="Tagline"/>
                </div>
                <div className="form-floating mb-3">
                <label>Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} name="description" className="form-control" placeholder="Description"/>
                </div>
                <div className="form-floating mb-3">
                <label>First Brewed</label>
                    <input type="text" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)} name="first_brewed" className="form-control" placeholder="First Brewed"/>
                </div>
                <div className="form-floating mb-3">
                <label>Brewers Tips</label>
                    <input type="text" value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)} name="brewers_tips" className="form-control" placeholder="Brewers Tips"/>
                </div>
                <div className="form-floating mb-3">
                <label>Attenuation Level</label>
                    <input type="number" value={attenuationLevel} onChange={(e) => setAttenuationLevel(e.target.value)} name="attenuation_level" className="form-control" placeholder="Attenuation Level"/>
                </div>
                <div className="form-floating mb-3">
                <label>Contributed by</label>
                    <input type="text" value={contributedBy} onChange={(e) => setContributedBy(e.target.value)} name="contributed_by" className="form-control" placeholder="Contributed by"/>
                </div>
                <div>
                <button type="submit" className="btn btn-info text-light">Add New Beer</button>
                </div>
            </form>
        </div>     
    </div>
  )
  }


export default NewBeer