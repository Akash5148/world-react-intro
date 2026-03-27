import React from 'react';
import './Country.css'
const Country = ({EachCountry}) => {
    return (
        <div className='eachcountry' >

            <img src= {EachCountry.flags.flags.png}></img>
            <p>Name: {EachCountry.name.common}</p>
            <p> Official Name: {EachCountry.name.official}</p>
            <p>Area:{EachCountry.area.area}

 {EachCountry.area.area > 200000 && " > Big Country"}
 {EachCountry.area.area < 50000 && "  > small Country"}
                 
            </p>
              <p>population:{EachCountry.population.population}</p>
              <p>Region:{EachCountry.region.region}</p>
              <p>Continents:{EachCountry.continents.continents}

               
              </p>
        </div>
    );
};

export default Country;