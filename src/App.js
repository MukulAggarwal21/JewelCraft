import React from 'react'
import './App.css';
import Navbar2 from './components/Navbar2';
import Navbar from './components/navbar'
import Slider from './components/slider';
import Banner from './components/banner';
import Trending from './components/trending';
import Fresharrival from './components/fresharrival'
import FavSection from './components/favsection';
import Gender from './components/gender';
import Brides from './components/brides';
import Banner2 from './components/banner2';
import Header from './components/header';
import Footer from './components/footer';
//Images
import NecklaceImage from './images/1.png'
import Necklace from './images/2.jpg'
import rings from './images/3.jpg'
// For  New Arrival Section
import Jhumka from './images/new-arrival/Jhumkas.jpeg'
import GreenNecklace from './images/new-arrival/Green Jewel Necklace.jpeg'
import Diamondset from './images/new-arrival/Diamond Set.jpeg'
import GoldNecklace from './images/new-arrival/Gold Necklace.jpeg'
import Bangles from './images/new-arrival/Bangles.jpeg'
import StoneNecklace from  './images/new-arrival/Kundan.jpeg'
import Goldchain from './images/new-arrival/Gold Chain.jpeg'
import Menring from './images/new-arrival/Men Ring.jpeg'
import bracelete from './images/new-arrival/Bracelete (2).jpeg'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const cards = [
  {
    title: 'Jhumka',
    description: "Adorn your essence with the timeless elegance of a jhumka, where tradition meets sophistication.",
    image: Jhumka
  },
  {
    title: 'Green Jewel',
    description: "Enchant admirers with the dazzling allure of a Green Jewel Necklace, a radiant testament to elegance and grace.",
    image: GreenNecklace
  },
  {
    title: 'Diamond Set',
    description: "Dazzle in sophistication with a Diamond Set, where brilliance meets timeless allure.",
    image: Diamondset
  },
  {
    title: 'Gold Necklace',
    description:
      "Elevate your elegance with a Gold Necklace, a timeless adornment of refined allure.",
    image: GoldNecklace
  },
  {
    title: 'Bangles',
    description: "Adorn your wrists with shimmering grace, as bangles echo tales of tradition and elegance.",
    image: Bangles
  },
  {
    title: 'Stone Necklace',
    description: "Elevate your style with a Stone Necklace, where natural allure meets timeless elegance.",
    image: StoneNecklace
  },
  {
    title: 'Gold Chain',
    description: "Capture attention with a Gold Chain, a bold statement of timeless allure.",
    image: Goldchain
  },
  {
    title: 'Men Rings',
    description: "Exude confidence with men's rings, a symbol of strength and refined style.",
    image: Menring
  },
  {
    title: 'Bracelet',
    description: "Adorn your wrist with a bracelet, a timeless accessory that speaks volumes of your style.",
    image: bracelete
  }
];

const images = [
  { NecklaceImage }, { Necklace }, { rings }
]

export default function App() {
  return (
    <>
    <Router>
     <Header/>
     <Navbar2/>
      <Navbar />
      <Slider images={images} />
      <Banner />
      <Fresharrival cards={cards} />
      <FavSection />
      <Gender />
      <Trending />
      <Banner2 />
      <Brides />
      <Footer />
      </Router>
    </>
  )
}
