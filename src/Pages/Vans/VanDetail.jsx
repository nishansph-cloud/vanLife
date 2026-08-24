// import { useParams, Link, useLocation, useLoaderData } from "react-router-dom"
// import { useState, useEffect } from "react"
// import { getVans } from "../../api"

// export function loader( {params} ) {
//     return getVans(params.id)
// }

// function VanDetail() {

//     // const [van, setVan] = useState(null)

//     // useEffect( () => {
//     //     async function fetchVan(){
//     //         const response = await fetch(`/api/vans/${params.id}`)
//     //         const data = await response.json()
//     //         setVan(data.van)
//     //     }
//     //     fetchVan() 
//     // },[params.id])

//     // const params = useParams()

//     // These above code are no longer needed since, we are using useLoaderData hook

//     const location = useLocation()
//     //use location contains pretty usefull objects, which we can exploit
//     //it survives refresh but if the url is shared it doesn't survive unlike searchParams
//     //useLocation is browser inbuild state, react just has a way of handling it and using it

//     const van = useLoaderData()

//     const search = location.state?.search || ""
//     // using optional chainig to do same thing as ternary condition was doing

//     const type = location.state?.type || "all"
//     //optional chaining, I don't konw why this works, it looks weird

// //     console.log(location)
// //    if (!van) return <h2>Loading...</h2>

// // no longer needed since we can be sure that this page only loades if data fetches sucessully

//   return (
//     <section className='van-detail-section'>

//         <Link 
//             // to={`../${location.state.search 
//             //     ? location.state.search 
//             //     : null }`}
//             to={`..${search}`} 
//             relative='path'
//         > 
//             {`← Back to ${type} vans`}
//         </Link>

//         <div className='van-detail__img-container'>
//             <img  alt='van-img' src={van.imageUrl}/>
//         </div>

//         <div className='van-detail__info'>
//             <span className='van-tag'>{van.type}</span>
//             <h1>{van.name}</h1>
//             <span className='price'>${van.price}/<br />day</span>
//             <p>{van.description}</p>
//             <button>Rent this van</button>
//         </div> 

//     </section>
//   )
// }

// export default VanDetail




// cleaning
import { Suspense } from "react"
import { Link, useLocation, useLoaderData, defer, Await } from "react-router-dom"
// import { getVans } from "../../api"
import { getVan } from "../../api"

export function loader( {params} ) {
    return  defer({van : getVan(params.id)})
}

function VanDetail() {

    const location = useLocation()
    //use location contains pretty usefull objects, which we can exploit
    //it survives refresh but if the url is shared it doesn't survive unlike searchParams
    //useLocation is browser inbuild state, react just has a way of handling it and using it

    const vanPromise = useLoaderData()

    const search = location.state?.search || ""
    // using optional chainig to do same thing as ternary condition was doing

    const type = location.state?.type || "all"
    //optional chaining, I don't konw why this works, it looks weird

    function renderVanDetail(van) {
        return(
            <section className='van-detail-section'>

                <Link 
                    to={`..${search}`} 
                    relative='path'
                > 
                    {`← Back to ${type} vans`}
                </Link>

                <div className='van-detail__img-container'>
                    <img  alt='van-img' src={van.imageUrl}/>
                </div>

                <div className='van-detail__info'>
                    <span className='van-tag'>{van.type}</span>
                    <h1>{van.name}</h1>
                    <span className='price'>${van.price}/<br />day</span>
                    <p>{van.description}</p>
                    <button>Rent this van</button>
                </div> 

            </section>
        )
    }

  return (
    <Suspense fallback={<h2>loading details...</h2>}>
        <Await resolve={vanPromise.van}>
            {renderVanDetail}
        </Await>
    </Suspense>
  )
}

export default VanDetail