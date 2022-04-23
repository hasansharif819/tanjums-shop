import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeLehenga from '../HomeLehenga/HomeLehenga';
import HomeSharee from '../HomeSharee/HomeSharee';
import Sharee from '../Shop/Sharee/Sharee';
import './Home.css';
import p1 from '../../../image/p1.jpg';
import p2 from '../../../image/p2.jpg';
import p3 from '../../../image/p3.jpg';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Home = () => {
    const [sharee, setSharee] = useState([]);
    const [lehenga, setLehenga] = useState([]);
    useEffect( () => {
        fetch('lehenga.json')
        .then(res => res.json())
        .then(data => setLehenga(data))
    }, [])
    useEffect(() => {
        fetch('sharee.json')
            .then(res => res.json())
            .then(data => setSharee(data))
    }, [])
    return (
        <div>
          <PageTitle title='Home'></PageTitle>
            <h2 className='title text-success'>WELCOME TO TANJUM'S SHOP</h2>
            <div className="carouselPart">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={p1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Sharee</h3>
      <Link to='/about'>
        <button className='btn btn-primary'>Contact</button>
      </Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={p2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Lehenga</h3>
      <Link to='/about'>
        <button className='btn btn-primary'>Contact</button>
      </Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={p3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Churi</h3>
      <Link to='/about'>
        <button className='btn btn-primary'>Contact</button>
      </Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
            <div className="shaeeBazar">
            <div className='row'>
                <h3 className='text-primary'>Sharee Bazar</h3>
                {
                    sharee.slice(0, 3).map(singleSharee => <HomeSharee
                        key={singleSharee.id}
                        singleSharee={singleSharee}
                    ></HomeSharee>)
                }
            </div>
            <Link to='/sharee'>
            <button className='btn btn-success'>See More Sharee</button>
            </Link>
            </div>
            
            <div className="lehengaBazar">
            <h3 className='text-primary'>Lehenga Bazar</h3>
                <div className='row'>
                    {
                        lehenga.slice(0, 3).map(singleLehenga => <HomeLehenga
                            key={singleLehenga.idd}
                            singleLehenga={singleLehenga}
                        ></HomeLehenga>)
                    }
                </div>
                <Link to='/lehenga'>
                    <button className='btn btn-success'>See More Lehenga</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;