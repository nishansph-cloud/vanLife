// import { useState, useEffect } from 'react';
// import { Link, useSearchParams, useLoaderData } from 'react-router-dom';
// import { getVans } from '../../api';

// export function loader(){
//     return getVans()
// }

// export default function Vans() {

//     const [searchParams, setSearchParams] = useSearchParams()
//     // Like useState, but the value lives in the URL (as ?key=value)
//     // instead of only in memory — so it survives refresh and is shareable via link
    
//     const typeFilter = searchParams.get("type")
    
//     // const [vans, setVans] = useState([])
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState(null)
//     const data = useLoaderData()

//     // useEffect( () => {
//     //     async function loadVans() {
//     //         setLoading(true)
//     //         try{
//     //             const data = await getVans()
//     //             setVans(data)
//     //         }
//     //         catch(err){
//     //             setError(err)
//     //         }finally{
//     //         setLoading(false)
//     //         }
//     //     }
//     //     loadVans()
//     // },[])
//     // We are able to commet/delete this code thank to use of loader function
//     // and due to useLoaderData hook 


//     // const searchFilter = typeFilter 
//     //     ? vans.filter( van => van.type.toLowerCase() === typeFilter)
//     //     : vans
    
//     // modifying so that we can directly use data through useLoaderData instead of vans useState
    
//     const searchFilter = typeFilter 
//         ? data.filter( van => van.type.toLowerCase() === typeFilter)
//         : data
    

//     function genNewSearchParmasString(key, value) {
//         const sp = new URLSearchParams(searchParams)
//         if(value === null){
//             sp.delete(key)
//         }else{
//             sp.set(key, value)
//         }
//         return `?${sp.toString()}`
//     }

//     // function handleFilterChange(key, value){
//     //     setSearchParams(prevSearch =>{
//     //         if(value === null){
//     //             prevSearch.delete(key)
//     //         }else{
//     //             prevSearch.set(key, value)
//     //         }
//     //         return prevSearch
//     //     })
//     // }

//     if(loading) return <h1>Loading...</h1>
    
//     if(error) return <h1>Their was an error: {error.message}</h1>

//     return(
//         <>
//             <section className='van-header'>
                
//                 <h1>Explore our van options</h1>
                
//                 {/* <div className='vans-tag'>
//                     <button 
//                         onClick={() => setSearchParams({type: "simple"})}
//                     >simple</button>
                    
//                     <button 
//                         onClick={() => setSearchParams({type: "rugged"})}
//                     >rugged</button>
                    
//                     <button 
//                         onClick={() => setSearchParams({type: "luxury"})}
//                     >luxury</button>
                    
//                     <button 
//                         onClick={() => setSearchParams({})}
//                     >All</button>
//                 </div> */}
//                 {/* this approach is good but not best, if we have more than 2 frlter 
//                     eg:?name=bla&type=simple and we hit all then it will clear all the url(filter)
//                     or if we click another filter like luxury then it will reset hte URL and remove nemw=bla
//                     but the approach we used below does not do that and tackles that problem */}


//                 <div className='vans-tag'>
//                     <Link 
//                         to={genNewSearchParmasString("type", "simple")}
//                         className={typeFilter === 'simple' ? "selected" : ""}
//                         >simple</Link>
                    
//                     <Link 
//                         to={genNewSearchParmasString("type", "rugged")}
//                         className={typeFilter === 'rugged' ? "selected" : ""}
//                     >rugged</Link>
                    
//                     <Link 
//                         to={genNewSearchParmasString("type", "luxury")}
//                         className={typeFilter === 'luxury' ? "selected" : ""}
//                     >luxury</Link>
                    
//                     {typeFilter ? ( 
//                         <Link 
//                             to={genNewSearchParmasString("type", null)}
//                         >All</Link>
//                     ) : null}
//                 </div>


//                 {/* <div className='vans-tag'>
//                     <button 
//                         onClick={() => handleFilterChange("type", "simple")}
//                     >simple</button>
                    
//                     <button 
//                         onClick={() => handleFilterChange("type", "rugged")}
//                     >rugged</button>
                    
//                     <button 
//                         onClick={() => handleFilterChange("type", "luxury")}
//                     >luxury</button>
                    
//                     <button 
//                         onClick={() => handleFilterChange("type", null)}
//                     >All</button>
//                 </div> */}
//                 {/* This is another way of handling the problem we mentioned above,
//                     but for some reason I like the 2nd approach */}

            
//             </section>

//             <section className='van-list-section'>
                
//                 {searchFilter.map(van => (
//                     <Link key={van.id} to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }} >
//                         <div  className='van-list-container'>
                
//                             <div className='van-image-container'>
//                                 <img alt='van-image' src={van.imageUrl}/>
//                             </div>

//                             <div className='van-info'>
//                                 <h2>{van.name}</h2>
//                                 <span>${van.price}/day</span>
//                             </div>

//                             {van.type && <span className='van-tag'>{van.type}</span>}
                        
//                         </div>
//                     </Link>
//                 ))}

//             </section>
//         </>
//     )
// } 



// cleaning up a bit

// import { 
//     Link, 
//     useSearchParams, 
//     useLoaderData, 
//     defer, 
//     // it returns promise object, makes the component render faster by not loading before page renders
//     Await 
//     // Await will be used so that our component or element runs only when we get our promise from useLoaderData
// } from 'react-router-dom';
// import { getVans } from '../../api';

// export function loader(){
//     // return getVans() this way was abandoned since it made the page wait 
//     // for all the data before rendering anything (blocking navigation)
//     return defer({vans: getVans()})
//     // defer lets the loader return immediately with the promise still pending,
//     // instead of waiting for it to resolve — so the route can render right away
// }

// export default function Vans() {

//     const [searchParams, setSearchParams] = useSearchParams()
//     // Like useState, but the value lives in the URL (as ?key=value)
//     // instead of only in memory — so it survives refresh and is shareable via link
    
//     const typeFilter = searchParams.get("type")
    
//     const loaderData = useLoaderData()
//     console.log(loaderData.vans)
    
//     function genNewSearchParmasString(key, value) {
//         const sp = new URLSearchParams(searchParams)
//         if(value === null){
//             sp.delete(key)
//         }else{
//             sp.set(key, value)
//         }
//         return `?${sp.toString()}`
//     }
    
//     return(
//         <>
//             <section className='van-header'>
                
//                 <h1>Explore our van options</h1>

//                 <div className='vans-tag'>
//                     <Link 
//                         to={genNewSearchParmasString("type", "simple")}
//                         className={typeFilter === 'simple' ? "selected" : ""}
//                         >simple</Link>
                    
//                     <Link 
//                         to={genNewSearchParmasString("type", "rugged")}
//                         className={typeFilter === 'rugged' ? "selected" : ""}
//                     >rugged</Link>
                    
//                     <Link 
//                         to={genNewSearchParmasString("type", "luxury")}
//                         className={typeFilter === 'luxury' ? "selected" : ""}
//                     >luxury</Link>
                    
//                     {typeFilter ? ( 
//                         <Link 
//                             to={genNewSearchParmasString("type", null)}
//                         >All</Link>
//                     ) : null}
//                 </div>
            
//             </section>

//                 {/* Await waits for the specific promise passed via `resolve`, 
//                 and only renders its children once that promise resolves */}                
                    
//                 <Await resolve={loaderData.vans}>
                    
//                     {(vans) => {
                            
//                         const searchFilter = typeFilter 
//                             ? vans.filter( van => van.type.toLowerCase() === typeFilter)
//                             : vans

//                         return(
//                             <section className='van-list-section'>
                                
//                                 {searchFilter.map(van => (
//                                     <Link key={van.id} to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }} >
//                                         <div  className='van-list-container'>
                                
//                                             <div className='van-image-container'>
//                                                 <img alt='van-image' src={van.imageUrl}/>
//                                             </div>

//                                             <div className='van-info'>
//                                                 <h2>{van.name}</h2>
//                                                 <span>${van.price}/day</span>
//                                             </div>

//                                             {van.type && <span className='van-tag'>{van.type}</span>}
                                        
//                                         </div>
//                                     </Link>
//                                 ))}

//                             </section>
//                         )

//                     }}

//                 </Await>

//         </>
//     )
// } 



// same shit as above just written in different way

import { Suspense } from 'react';
import { 
    Link, 
    useSearchParams, 
    useLoaderData, 
    defer, 
    // it returns promise object, makes the component render faster by not loading before page renders
    Await 
    // Await will be used so that our component or element runs only when we get our promise from useLoaderData
} from 'react-router-dom';
import { getVans } from '../../api';

export function loader(){
    // return getVans() this way was abandoned since it made the page wait 
    // for all the data before rendering anything (blocking navigation)
    return defer({vans: getVans()})
    // defer lets the loader return immediately with the promise still pending,
    // instead of waiting for it to resolve — so the route can render right away
}

export default function Vans() {

    const [searchParams, setSearchParams] = useSearchParams()
    // Like useState, but the value lives in the URL (as ?key=value)
    // instead of only in memory — so it survives refresh and is shareable via link
    
    const typeFilter = searchParams.get("type")
    
    const loaderData = useLoaderData()
    
    function genNewSearchParmasString(key, value) {
        const sp = new URLSearchParams(searchParams)
        if(value === null){
            sp.delete(key)
        }else{
            sp.set(key, value)
        }
        return `?${sp.toString()}`
    }
    
    function renderVanElement(vans) {
        const searchFilter = typeFilter 
            ? vans.filter( van => van.type.toLowerCase() === typeFilter)
            : vans

        return(
            <section className='van-list-section'>
                
                {searchFilter.map(van => (
                    <Link key={van.id} to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }} >
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
        )
    }

    return(
        <>
            <section className='van-header'>
                
                <h1>Explore our van options</h1>

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
            
            </section>

                {/* Await waits for the specific promise passed via `resolve`, 
                and only renders its children once that promise resolves */}                
                <Suspense fallback={<h2>Loading...</h2>}>    
                    <Await resolve={loaderData.vans}>
                        
                        {renderVanElement}

                    </Await>
                </Suspense>

        </>
    )
} 