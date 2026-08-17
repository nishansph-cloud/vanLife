import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function Vans() {

    const [searchParams, setSearchParams] = useSearchParams()
    // Like useState, but the value lives in the URL (as ?key=value)
    // instead of only in memory — so it survives refresh and is shareable via link
    
    const typeFilter = searchParams.get("type")
    
    const [vans, setVans] = useState([])

    useEffect( () => {
        async function fetchVans() {
        const response = await fetch("/api/vans")
        const data = await response.json()
        setVans(data.vans)
        }
        fetchVans()
    },[])

    const searchFilter = typeFilter 
        ? vans.filter( van => van.type.toLowerCase() === typeFilter)
        : vans

    function genNewSearchParmasString(key, value) {
        const sp = new URLSearchParams(searchParams)
        if(value === null){
            sp.delete(key)
        }else{
            sp.set(key, value)
        }
        return `?${sp.toString()}`
    }

    // function handleFilterChange(key, value){
    //     setSearchParams(prevSearch =>{
    //         if(value === null){
    //             prevSearch.delete(key)
    //         }else{
    //             prevSearch.set(key, value)
    //         }
    //         return prevSearch
    //     })
    // }

    return(
        <>
            <section className='van-header'>
                
                <h1>Explore our van options</h1>
                
                {/* <div className='vans-tag'>
                    <button 
                        onClick={() => setSearchParams({type: "simple"})}
                    >simple</button>
                    
                    <button 
                        onClick={() => setSearchParams({type: "rugged"})}
                    >rugged</button>
                    
                    <button 
                        onClick={() => setSearchParams({type: "luxury"})}
                    >luxury</button>
                    
                    <button 
                        onClick={() => setSearchParams({})}
                    >All</button>
                </div> */}
                {/* this approach is good but not best, if we have more than 2 frlter 
                    eg:?name=bla&type=simple and we hit all then it will clear all the url(filter)
                    or if we click another filter like luxury then it will reset hte URL and remove nemw=bla
                    but the approach we used below does not do that and tackles that problem */}


                <div className='vans-tag'>
                    <Link 
                        to={genNewSearchParmasString("type", "simple")}
                        className={typeFilter === 'simple' ? "selected" : ""}
                        >simple</Link>
                    
                    <Link 
                        to={genNewSearchParmasString("type", "rugged")}
                        className={typeFilter === 'rugged' ? "selected" : ""}
                    >rugged</Link>
                    
                    <Link 
                        to={genNewSearchParmasString("type", "luxury")}
                        className={typeFilter === 'luxury' ? "selected" : ""}
                    >luxury</Link>
                    
                    {typeFilter ? ( 
                        <Link 
                            to={genNewSearchParmasString("type", null)}
                        >All</Link>
                    ) : null}
                </div>


                {/* <div className='vans-tag'>
                    <button 
                        onClick={() => handleFilterChange("type", "simple")}
                    >simple</button>
                    
                    <button 
                        onClick={() => handleFilterChange("type", "rugged")}
                    >rugged</button>
                    
                    <button 
                        onClick={() => handleFilterChange("type", "luxury")}
                    >luxury</button>
                    
                    <button 
                        onClick={() => handleFilterChange("type", null)}
                    >All</button>
                </div> */}
                {/* This is another way of handling the problem we mentioned above,
                    but for some reason I like the 2nd approach */}

            
            </section>

            <section className='van-list-section'>
                
                {searchFilter.map(van => (
                    <Link key={van.id} to={van.id} >
                        <div  className='van-list-container'>
                
                            <div className='van-image-container'>
                                <img alt='van-image' src={van.imageUrl}/>
                            </div>

                            <div className='van-info'>
                                <h2>{van.name}</h2>
                                <span>${van.price}/day</span>
                            </div>

                            {van.type && <span className='van-tag'>{van.type}</span>}
                        
                        </div>
                    </Link>
                ))}

            </section>
        </>
    )
} 