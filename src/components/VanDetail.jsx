import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function VanDetail() {

    const [van, setVan] = useState(null)

    const params = useParams()

    useEffect( () => {
        async function fetchVan(){
            const response = await fetch(`/api/vans/${params.id}`)
            const data = await response.json()
            setVan(data.van)
        }
        fetchVan()
    },[params.id])

   if (!van) return <h2>Loading...</h2>

  return (
    <section className='van-detail-section'>

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

export default VanDetail