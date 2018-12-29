import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './styles/slideshow.css'

const items = [
    {
      src: 'https://cdn.pixabay.com/photo/2018/08/16/11/36/mentor-3610255_1280.jpg',
      altText: 'Slide 1',
      caption: 'Earn Money Every Month',
      header: 'Share Your Data',
      Text: "new" 

    },
    {
      src: 'https://i.imgur.com/gnyx1Nl.jpg',
      altText: 'Slide 2',
      caption: 'Slide 2',
      header: 'Slide 2 Header'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2018/01/24/18/05/background-3104413_1280.jpg',
      altText: 'Slide 3',
      caption: 'Slide 3',
      header: 'Slide 3 Header'
    }
  ];
  
  const Slides = () => <UncontrolledCarousel items={items} />;
export default Slides;