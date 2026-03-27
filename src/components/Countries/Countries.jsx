import { use } from "react";
import Country from "./Country/Country";

const Countries = ({CountriesPromise}) => {
    const CountriesData =use(CountriesPromise) 
    const AllCountries =CountriesData.countries

    // console.log(AllCountries)
    return (


        <div style={{ textAlign: 'center' }}>
            <h1>In the world:{AllCountries.length}</h1>

<div className="country">

{


    AllCountries.map(EachCountry =>{
        


        
        
         console.log(EachCountry)


        return(<Country  EachCountry ={EachCountry} key={EachCountry.name.common}></Country>)
    }



    
)

}

</div>


        </div>
    );
};

export default Countries;