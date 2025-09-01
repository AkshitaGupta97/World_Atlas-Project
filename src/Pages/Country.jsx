import { useState, useTransition } from "react"
import { useEffect } from "react"
import { getCountryData } from "../Components/Layout/API/PostApi";
import { Loader } from "../Components/Layout/UI/Loader";
import { CountryCard } from "../Components/Layout/UI/CountryCard";

export const Country = () => {

    const [isPending, startTransition] =  useTransition();
    const [countries, setCounteries] = useState([])

    if(isPending) return <Loader />
    
    useEffect(() => {
        startTransition(async() => {
            const res = await getCountryData();
           // console.log(res);
            setCounteries(res)
        })
    }, [])

    return (
        <section className="country-section">
            <ul className="grid grid-four-cols">
                {
                    countries.map((currCountry, idx) => {
                        return (
                            <CountryCard country={currCountry} key={idx}/>
                        )
                    })
                }
            </ul>
        </section>
    )
}