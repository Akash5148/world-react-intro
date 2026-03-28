import { use, useState } from "react";
import Country from "./Country/Country";
import './Countries.css'
const Countries = ({ CountriesPromise }) => {


    const [VisitedCountry, setVisitedCountry] = useState([]);

    const handleVisitedCountry = (EachCountry) => {


        console.log('handleVisitedCountry clicked ', EachCountry);


        const newVisitedCountry = [...VisitedCountry, EachCountry]

        setVisitedCountry(newVisitedCountry);
    }
    const CountriesData = use(CountriesPromise)
    const AllCountries = CountriesData.countries

    // console.log(AllCountries)
    return (


        <div style={{ textAlign: 'center' }}>
            <h1>In the world:{AllCountries.length}</h1>
            <h3>Total Country Visited:{VisitedCountry.length} </h3>

            <ol className="ollist">

                {VisitedCountry.map(EachCountry => <li>{EachCountry.name.common}</li>)}


            </ol>

            <div className="country">

                {


                    AllCountries.map(EachCountry => {





                        console.log(EachCountry)


                        return (<Country EachCountry={EachCountry} key={EachCountry.name.common}
                            handleVisitedCountry={handleVisitedCountry}></Country>)
                    }




                    )

                }

            </div>


        </div>
    );
};

export default Countries;