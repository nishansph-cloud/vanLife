import { Link } from "react-router-dom"

export default function About() {
  return(
    <section className="about-section">
        <div className="img-container">
            <img alt="van-img" src="../assets/van.jpg"/>
        </div>

        <div className="about-text">
            <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>

            <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
        
            <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>

        <div className="about-pitch">
            <h2>Your destination is waiting.<br />Your van is ready.</h2>
            <Link>Expolore our van</Link>

        </div>
    </section>
  )
}