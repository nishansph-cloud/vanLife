import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {makeServer} from '../data/server';




makeServer()


export default function Vans() {

    const [vans, setVans] = useState([])

    useEffect( () => {
        async function fetchVans() {
        const response = await fetch("/api/vans")
        const data = await response.json()
        setVans(data.vans)
        }
        fetchVans()
    },[])

    return(
        <>
            <section className='van-header'>
                
                <h1>Explore our van options</h1>
                
                <div className='vans-tag'>
                    <span>simple</span>
                    <span>rugged</span>
                    <span>luxury</span>
                </div>
            
            </section>

            <section className='van-list-section'>
                
                {vans.map(van => (
                    <Link key={van.id} to={`/vans/${van.id}`} >
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
