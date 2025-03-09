import { CardSubtitle } from 'react-bootstrap'
import click from '../img/images/images/icon1.png'
import CarService from './CarService'
import Featuredcars from './FeaturedCars'
import car1 from '../img/images/images/new-cars-model/ncm1.png'
import car2 from '../img/images/images/new-cars-model/ncm2.png'
import car3 from '../img/images/images/new-cars-model/ncm3.png'
import Brands from './Brands'
import brnd1 from '../img/images/images/brand/br1.png'
import brnd2 from '../img/images/images/brand/br2.png'
import brnd3 from '../img/images/images/brand/br3.png'
import brnd4 from '../img/images/images/brand/br4.png'
import brnd5 from '../img/images/images/brand/br5.png'
import brnd6 from '../img/images/images/brand/br6.png'
import Header from './Header'
import Footer from './Footer'

function Home() {
const style ={
  header:{backgroundColor: 'transperent', color: 'white'},
  a:{
    textDecoration:"none"
  },
  Link:{
    textDecoration:"none"
  }
}
  const SRcard = [
    {
      name: 'Largest Dealership of Car',
      img: click,
      desc: 'Nemo enim ipsam voluptatem quia voluptas sit  aspernatur aut odit aut den fugit sed quia',
    },
    {
      name: 'Unlimited Repair Warrenty',
      img: click,
      desc: 'Nemo enim ipsam voluptatem quia voluptas sit  aspernatur aut odit aut den fugit sed quia',
    },
    {
      name: 'Insurence Support',
      img: click,
      desc: 'Nemo enim ipsam voluptatem quia voluptas sit  aspernatur aut odit aut den fugit sed quia',
    }
  ]
  const FCcard = [
    {
      name: 'BMW 6-Series Gran Coupe',
      img: car1,
      p: 'Model:2017 3100Mi 240HP Automatic ',
      desc: 'Moreover, it is our responsibility to look after our friends who serve us in many ways.',
      price: '$89,395'
    },
    {
      name: 'Chervolet Camaro WMV20',
      img: car2,
      p: 'Model:2017 3100Mi 240HP Automatic ',
      desc: 'Moreover, it is our responsibility to look after our friends who serve us in many ways.',
      price: '$66,575'
    },
    {
      name: 'Lamborghini V520',
      img: car3,
      p: 'Model:2017 3100Mi 240HP Automatic ',
      desc: 'Moreover, it is our responsibility to look after our friends who serve us in many ways.',
      price: '$125,250'
    },
    {
      name: 'Audi A3 Sedan',
      img: car1,
      p: 'Model:2017 3100Mi 240HP Automatic ',
      desc: 'Moreover, it is our responsibility to look after our friends who serve us in many ways.',
      price: '$95,500'
    },
  ]
  const Brandcard = [
    {
      img: brnd1
    },
    {
      img: brnd2
    },
    {
      img: brnd3
    },
    {
      img: brnd4
    },
    {
      img: brnd5
    },
    {
      img: brnd6
    }
  ]
  const styling = {
    footer: {
        backgroundColor: '#2A2D54', 
        display: 'flex', 
        width: '100%', 
        marginTop: '130px',  // Adjust this value to move it closer
        padding: '15px 20px', 
        marginBottom: '0px', // Remove any extra bottom margin
    }
};

  return (
    <>
    <Header stl={style} />
      <div className='heroBanner'>
        <div className="overlay">
          {/* The overlay covers only the background image */}
        </div>
        <div className='heading'>
          <div className='firstRow'>
            <h1>GET YOUR DESIRE CAR IN RESONABLE PRICE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula <br />arcu nec nisl pellentesque, ut semper eros lobortis.
            </p>
          </div>
          <a  href="" className='btn'> Contact Us </a>
        </div>
      </div>
      <div id='service' className='serviceSection'>
        {
          SRcard.map((card) => {
            return <CarService CarServiceCard={card} />
          })
        }
      </div>
      <div id='featured-cars' className="carSection">
        <div className="heading">
          <p>Checkout the Featured Cars </p>
          <h2>FEATURED CARS</h2>
          <span className='bttm-line'></span>
        </div>
        <div className="carModels">
          {
            FCcard.map((card) => {
              return <Featuredcars cards={card} />
            })
          }
        </div>
      </div>
      <div id='brands' className="brandsSection">
        {
          Brandcard.map((card) => {
            return <Brands BrandsCard={card} />
          })
        }
      </div>
      
      <Footer stl={styling}/>
    </>
  )
}
export default Home