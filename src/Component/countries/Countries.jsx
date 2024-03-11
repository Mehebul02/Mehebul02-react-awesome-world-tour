import { useEffect } from "react";
import { useState } from "react";
import Country from "./country/Country";
const Countries = () => {
    const [countries,setCountries]=useState([])
    const [ visitedCountries ,setVisitedCountries]=useState([])
    const [ visitedCountriesFlag,setVisitedCountriesFlag]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    // visited 
    const handleVisitedCountries=(country)=>{
        console.log('I am click')
        const newVisitedCountry=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountry)

    }
    const handleVisitedCountriesFlag=(flag)=>{
        const newVisitedCountriesFlag=[...visitedCountriesFlag,flag];
        setVisitedCountriesFlag(newVisitedCountriesFlag)
    }
    return (
        <div>
            <h1>Total Countries:{countries.length}</h1>
            <div>
                <h1>Visited Country:{visitedCountries.length}</h1>
                <ul>
                {
                        visitedCountries.map(country => <li key={country.cca3} style={{color:'red',fontSize:'20px',listStyle:'none'}}>{country.name.common}</li>)
                    }
                    {
                        visitedCountriesFlag.map((flag,i) => <img key={i} style={{width:'100px'}} src={flag}/>)
                    }
                </ul>
            </div>
            <hr />
            {/* display countries  */}
            <div className="card-container">
            {
                countries.map(country => <Country key={countries.cca3} handleVisitedCountries={handleVisitedCountries} handleVisitedCountriesFlag={handleVisitedCountriesFlag} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;