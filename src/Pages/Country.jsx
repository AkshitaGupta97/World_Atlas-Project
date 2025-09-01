import { useState, useTransition } from "react"
import { useEffect } from "react"
import { getCountryData } from "../Components/Layout/API/PostApi";
import { Loader } from "../Components/Layout/UI/Loader";
import { CountryCard } from "../Components/Layout/UI/CountryCard";
import { SearchFilter } from "../Components/Layout/UI/SearchFilter";

export const Country = () => {

    const [isPending, startTransition] = useTransition();
    const [countries, setCounteries] = useState([])
    const [search, setSearch] = useState()
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData();
            // console.log(res);

            setCounteries(res.data)

        })
    }, [])

   // console.log(search, filter);  
    if (isPending) return <Loader />

    const SearchFilterFun = (cntry) => {
        if(search){
            return cntry.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return cntry;
    }

    const filterRegion = (cntry) => {
        if(filter === 'all') return cntry;
        return cntry.region === filter;
    }
         
    const filterCountries = countries.filter((country) => SearchFilterFun(country) && filterRegion(country))

    return (

        <>
            <h1 className="country-heading">Country List</h1>
            <section className="country-section">
                <SearchFilter  search={search} setSearch={setSearch} 
                filter={filter} setFilter={setFilter} countries={countries} setCounteries={setCounteries}/>
                <ul className="grid grid-four-cols">
                    {
                        filterCountries.map((currCountry, idx) => {
                            return (
                                <CountryCard country={currCountry} key={idx} />
                            )
                        })
                    }
                </ul>
            </section>
        </>
    )
}