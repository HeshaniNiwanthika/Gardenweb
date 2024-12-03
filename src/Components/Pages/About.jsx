import React from 'react'
import Navbar from '../Navbar/Navbar'
import plantimage from '../Assets/plantemoji.jpg'
import smile from '../Assets/smile.png'
import trophy from '../Assets/trophy.png'
import thinking from '../Assets/thinking.png'
import vision from '../Assets/vision.png'
import './About.css';


export default function About() {
  return (
    <div>
        <Navbar/>
        <div className="mainNav">
        <h1><i><center>Our Garden<img className="plantimage" src={plantimage} alt=""/></center></i></h1>
        <p>Welcome to Our Garden, where passion for nature meets the art of gardening. We are more than just a gardening supply store we are a community of garden enthusiasts dedicated to helping you cultivate beauty, growth, and sustainability in your outdoor spaces.</p>
        <hr></hr>

        <h3>Our story <img className="Smile" src={smile} alt=""/></h3>
        <p>Founded by a team of gardening lovers, [Your Website Name] was born from a simple idea: making gardening accessible, enjoyable, and rewarding for everyone. Whether you're planting your first seedling, building a flourishing backyard oasis, or growing your own food, we’re here to guide and inspire you every step of the way.

Our mission is to bring joy to every gardener's journey by offering the tools, products, and knowledge needed to create thriving gardens that reflect personal style and care for the environment.</p>


        <h3>What we offer <img className="trophy" src={trophy} alt=""/></h3>
        <p>At Our Garden, we provide a comprehensive range of gardening essentials, including:
          <ul>
            <li>High-Quality Seeds and Plants: Carefully sourced to ensure health, vitality, and optimal growth.</li>
            <li>Gardening Tools and Equipment: From beginner-friendly basics to professional-grade tools, we have everything you need.</li>
            <li>Planters and Décor: Add personality to your space with a variety of pots, planters, and stylish garden accessories.</li>
            <li>Organic Solutions: Eco-friendly fertilizers, pest control, and composting supplies to support sustainable gardening.</li>
          </ul>
        </p>


        <h3>Why Choose Us? <img className="thinking" src={thinking} alt=""/> </h3>
        <p>
          <ul>
            <li>Unmatched Quality: Every product is carefully selected to meet the highest standards.</li>
            <li>Affordable Prices: Beautiful gardens shouldn’t cost a fortune. We ensure our products are budget-friendly.</li>
            <li>Exceptional Customer Service: Our knowledgeable team is here to answer your questions and offer personalized advice.</li>
            <li>Fast & Reliable Delivery: Get your gardening supplies quickly so you can focus on what you love.</li>
            <li>Inspiration & Guidance: Explore our library of gardening tips, DIY tutorials, and seasonal planting guides.</li>
          </ul>
        </p>


        <h3>Our Vision <img className="vision" src={vision} alt=""/></h3>
        <p>
        We believe gardens have the power to transform lives—offering tranquility, beauty, and sustainability. Our vision is to empower every individual to cultivate their green spaces, no matter the size or location. We strive to promote eco-conscious practices and foster a deeper connection between people and nature.
        </p>
        <h3>Join Our Gardening Community</h3>
        <p>
        At <b>Our Garden</b> , we’re not just here to sell gardening supplies; we’re here to nurture a community of passionate gardeners. Share your journey with us, connect with fellow plant enthusiasts, and watch your gardening dreams come to life.

Whether you’re a seasoned gardener or just starting out, we’re thrilled to be part of your story. Let’s grow something amazing together!
        </p>
        </div>
   

     </div>   

    
  )
}
