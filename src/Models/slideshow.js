import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './styles/slideshow.css'

const items = [
    {
      src: 'https://cdn.pixabay.com/photo/2018/12/29/16/13/mountains-3901729_1280.jpg',
      altText: 'Slide 1',
      caption: 'Earn Extra Money Every Month',
      header: 'Share Your Data',
      Text: "new" 

    },
    {
      src: 'https://cdn.pixabay.com/photo/2016/07/30/19/47/banner-1557841_1280.jpg',
      altText: 'Slide 2',
      caption: 'Share and Cancel at Anytime',
      header: 'Control Your Data'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2016/07/30/19/47/banner-1557842_1280.jpg',
      altText: 'Slide 3',
      caption: 'Sell Your Data Directly and Transparently',
      header: 'No Third Party'
    }
  ];
  
  const Slides = () => <UncontrolledCarousel items={items} />;
export default Slides;