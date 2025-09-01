
export const CountryCard = ({country}) => {
    const {flags, name, population, region, capital} = country;
    return(
        <li className='country-card card'>
            <div className="container-card bg-yellow-box">
                <img src={flags.svg} alt={flags.svg} />

                <div className="countryInfo">
                    <p className="card-title">
                        {name.common.length > 10 ? name.common.slice(0, 10) + '...' : name.common}
                    </p>
                    <p>
                        <span className="card-description">Population : </span> {population.toLocaleString()}
                    </p>
                     <p>
                        <span className="card-description">Capital : </span> {capital[0]}
                    </p>
                     <p>
                        <span className="card-description">Region : </span> {region}
                    </p>

                </div>

            </div>

        </li>


    )
}