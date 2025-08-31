import { useTransition } from "react"
import { useEffect } from "react"
import { getCountryData } from "../Components/Layout/API/PostApi";

export const Country = () => {

    const[isPending, startTransition] =  useTransition();

    if(isPending) return <h1>Loading...</h1>
    
    useEffect(() => {
        startTransition(async() => {
            const res = await getCountryData();
            console.log(res);
            
        })
       

    }, [])
    return (
        <div>hello</div>
    )
}