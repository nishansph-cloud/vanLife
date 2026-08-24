import { Suspense } from 'react'
import { Link, NavLink, useParams, Outlet, useLoaderData, Await } from 'react-router-dom'
// import { getHostVans } from '../../api'
import { getVan } from '../../api'
import { requiredAuth } from '../../utils'

export async function loader({ params, request }) {
  await requiredAuth(request)
  return {van: getVan(params.id)}
}

function HostVanDetail() {

  // const [van, setVan] = useState(null)

  // const params = useParams()
  
  // useEffect( () => {
  //     async function fetchVan(){
  //         const response = await fetch(`/api/vans/${params.id}`)
  //         const data = await response.json() 
  //         setVan(data.van)
  //     }
  //     fetchVan()
  // },[params.id])

  const vanPromise = useLoaderData()

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  function renderHostVanDetail(van) {
    return(
      <section className='host-van-detail-section'>

        <Link to=".." relative='path'> ← Back to all Vans</Link>
    
        <div className='vost-van-detail-container'>
          
          <div className='host-van-detail-img-container'>
            <img alt='van-image' src={van.imageUrl} />
          </div>

          <div className='host-van-detail-info'>
            <span className='van-tag'>{van.type}</span>
            <h1>{van.name}</h1>
            <span>${van.price}/day</span>
          </div>

        </div>

        <nav>
          <NavLink
            style={({isActive}) => isActive ? activeStyle : null} 
            end
            to="."
          >Detail</NavLink>

          <NavLink
            style={({isActive}) => isActive ? activeStyle : null} 
            to="pricing"
          >Pricing</NavLink>

          <NavLink
            style={({isActive}) => isActive ? activeStyle : null} 
            to="photos"
          >Photos</NavLink>
        </nav>

        <Outlet context={van}/> 
          
      </section>
    )
  }

  return (
    <Suspense fallback={<h2>Loading host-van detail...</h2>}>
      <Await resolve={vanPromise.van}>
        {renderHostVanDetail}
      </Await>
    </Suspense>
  )
}

export default HostVanDetail