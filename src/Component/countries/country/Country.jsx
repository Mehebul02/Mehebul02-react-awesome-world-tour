import { useState } from 'react';
import './Countries.css'
const Country = ({country,handleVisitedCountries,handleVisitedCountriesFlag}) => {
    // console.log(country)
    const {name,flags,capital,region,population}=country;
    const [visited,setVisited]=useState(false)
    const handleVisited =()=>{
        setVisited(true)
    }
   
   
    return (
        <div className = "countries-container">
            <h2>{name.common}</h2>
            <img style = {{width:'100px'}} src={flags.png} />
            <p>Capital:{capital}</p>
            <p>Region:{region}</p>
            <p>population:{population}</p>
            <button onClick={()=>handleVisitedCountriesFlag(country.flags.png)}>Add Flag</button>
            <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button>
            <button onClick={handleVisited} style={{marginRight:'20px', background:'#157FEA'}}>{visited? "Visited":'Going'}</button>
       
        {visited?"":''}
        
        </div>
    );
};

export default Country;