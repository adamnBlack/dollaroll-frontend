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
import PostsList from '../page/Blog/PostsList';

const Charitable = () => {
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
      <Layout
          title='Charitable Contribution page'
          description='YOU CAN OVERVIEW ALL THE BLOGS AROUND HERE'
          className='container-fluid'
      >
              
        <div style={{'backgroundColor': '#f0f2f5'}}>
          <Menu />
          <PostsList />
          <Copyright />
        </div>
        {/* <Search /> */}
      </Layout>
  );
};

export default Charitable;
