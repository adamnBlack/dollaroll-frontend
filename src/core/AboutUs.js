import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core/styles';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import Menu from './Menu';
import Search from './Search';
import 'fontsource-roboto';
import Copyright from './Copyright';

const AboutUs = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState([]);

  const carouselItems = [
    {
      id: '1',
      imgSrc: '/assets/banner/electronic-total.jpg',
      alt: 'Banner'
    },
    {
      id: '2',
      imgSrc: '/assets/banner/electronic-cellphone.jpg',
      alt: 'Banner'
    },
    {
      id: '3',
      imgSrc: '/assets/banner/electronic-watch.jpg',
      alt: 'Banner'
    },
    {
      id: '4',
      imgSrc: '/assets/banner/electronic-accessory.jpg',
      alt: 'Banner'
    },
    {
      id: '5',
      imgSrc: '/assets/banner/black-friday.jpg',
      alt: 'Banner'
    },
  ];

  const teamDetailItems = [
    {
      id: '1',
      imgSrc: '/assets/aboutus/ceo-1.jpg',
      alt: 'CEO',
      name: 'Author',
      job: 'CEO',
      detail: 'Meet Author, the boss of Dollaroll. He is on a mission to empower customer to take control of their electronic products.'
    },
    {
      id: '2',
      imgSrc: '/assets/aboutus/cto-2.jpg',
      alt: 'CTO',
      name: 'Edward',
      job: 'CTO',
      detail: 'Meet Edward, the boss of Dollaroll. He is on a mission to empower customer to take control of their electronic products.'
    },
    {
      id: '3',
      imgSrc: '/assets/aboutus/coo-3.jpg',
      alt: 'COO',
      name: 'Diana',
      job: 'COO',
      detail: 'Meet Diana, the boss of Dollaroll. She is on a mission to empower customer to take control of their electronic products.'
    }
  ];
  const categoryItems = [
    {
      id: '1',
      imgSrc: '/assets/category/cellphone.jpg',
      category: 'CellPhone',
      alt: 'category'
    },
    {
      id: '2',
      imgSrc: '/assets/category/desktop.jpg',
      category: 'Computer',
      alt: 'category'
    },
    {
      id: '3',
      imgSrc: '/assets/category/gaming.jpg',
      category: 'Gaming',
      alt: 'category'
    },
    {
      id: '4',
      imgSrc: '/assets/category/watch.jpg',
      category: 'Watch',
      alt: 'category'
    },
  ];

  const loadProductsBySell = () => {
    getProducts('sold').then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts('createdAt').then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };
  
  const carouselItem = (item) => (
    <div key={item.id}>
      <img 
        src={item.imgSrc}
        alt={item.alt}
        height={500}
        width='100%'
        className='object-cover w-full h-[350px]'
        draggable={false}
      />
    </div>
  )

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
      <div style={{'marginTop': '70px', 'backgroundColor': '#f0f2f5'}}>
        <Menu />
        <img 
            src='/assets/aboutus/about-us.jpg'
            alt="about-us"
            width='100%'
            height='500px'
            style={{'objectFit': 'cover'}}
            draggable={false}
        />
        <div className='container p-5  bg-white mt-5'>

          <div className='row' style={{'display': 'flex', 'justifyContent': 'space-evenly'}}>
                            
                <div className='col-md-3'>
                    <div class="mb-5">
                        <h3 class="text-center"><b>OUR <font color='#0ea5e9'>MISSION</font></b></h3>
                    </div>
                    <p className='text-justify'>There's this notion that to grow a business, you have to be ruthless. But we know there's 
                    a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can 
                    grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an 
                    ecosystem uniting software, education, and community to help businesses grow better every day.</p>
                </div>

                <div className='col-md-7'>   
                    <div>
                          <img 
                            src='/assets/aboutus/mission.jpg'
                            alt='story'
                            height={300}
                            width='100%'
                            style={{'objectFit': 'cover', 'borderRadius': '10px'}}
                            className='object-cover w-full h-[350px]'
                            draggable={false}
                          />
                    </div>
                </div>
          </div>
        </div>
        <div className='container p-5  bg-white mt-5'>
          <div class="mb-5">
            <h3 class="text-center"><b>OUR <font color='#0ea5e9'>STORY</font></b></h3>
          </div>
          <div className='row' style={{'display': 'flex', 'justifyContent': 'space-evenly'}}>
            
                <div className='col-md-7'>   
                    <div>
                          <img 
                            src='/assets/aboutus/electronic-total.jpg'
                            alt='story'
                            height={300}
                            width='100%'
                            style={{'objectFit': 'cover', 'borderRadius': '10px'}}
                            className='object-cover w-full h-[350px]'
                            draggable={false}
                          />
                    </div>
                </div>
                
                <div className='col-md-3'>
                    <p className='text-justify'>As fellow graduate students at MIT in 2004, Brian and Dharmesh noticed a shift in the way people shop and buy. 
                    Consumers were no longer tolerating interruptive bids for their attention — in fact, they'd gotten really, really good at ignoring them.
                    From this shift, a company was born: HubSpot. It was founded on "inbound", the notion that people don't want to be interrupted by marketers
                     or harassed by salespeople — they want to be helped. Today, the inbound movement continues to empower businesses around the world to stop 
                     interrupting, start helping, and return their focus to the customer.</p>
                </div>
          </div>
        </div>
        <div className='container p-5  bg-white mt-5'>
          <div class="mb-5">
            <h3 class="text-center"><b>MEET OUR <font color='#0ea5e9'>TEAM</font></b></h3>
          </div>
          <div className='row' style={{'display': 'flex', 'justifyContent': 'space-evenly'}}>
            {teamDetailItems.map((item) => (

                <div className='col-md-3'>   
                    <div key={item.id}>
                          <img 
                            src={item.imgSrc}
                            alt={item.alt}
                            height={300}
                            width='100%'
                            style={{'objectFit': 'cover', 'borderRadius': '10px'}}
                            className='object-cover w-full h-[350px]'
                            draggable={false}
                          />
                    </div>
                    <br />
                    <div>
                      <h3><b>{item.name}</b></h3>
                      <h3>{item.job}</h3>
                      <p>{item.detail}</p>
                    </div>
                </div>
            ))}
          </div>
          
        </div>
        <Copyright />
      </div>
  );
};

export default AboutUs;
