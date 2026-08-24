import { Suspense } from 'react'
import { Link, useLoaderData, Await } from 'react-router-dom'
import { getHostVans } from '../../api'
import { requiredAuth } from '../../utils'

export async function loader({ request }) {
  await requiredAuth(request)
  return {vans: getHostVans()
}}

function HostVans() {

  // const [vans, setvans] = useState([])

  // useEffect(() => {
  //   async function fetchVans(){
  //     const response = await fetch(`/api/vans?hostId=${123}`)
  //     const data = await response.json()
  //     setvans(data.vans)
  //   }
  //   fetchVans()
  // },[])

  const vansPromise = useLoaderData()

  function renderHostVans(vans) {
    return(
      <section className='host-van-section'>
        
        <h1>Your listed Vans</h1>
        
        {vans.map(van => 
          <Link key={van.id} to={van.id}>
            
            <div className='host-van-container'>
              
              <div className='host-van-img-container'>
                <img alt='van-image' src={van.imageUrl} />
              </div>

              <div className='host-van-info'>
                <h1>{van.name}</h1>
                <span>${van.price}/day</span>
              </div>

            </div>
          
          </Link>
        )}
     
      </section>
    )
  }

  return (
    <Suspense fallback={<h2>Loading host-vans...</h2>}>
      <Await resolve={vansPromise.vans}>
        {renderHostVans}
      </Await>
    </Suspense>
  )
}

export default HostVans