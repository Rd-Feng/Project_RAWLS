import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './styles/slideshow.css'

const items = [
    {
      src: 'https://i.imgur.com/1QoqSRk.jpg',
      altText: 'Slide 1',
      caption: 'Earn Extra Money Every Month',
      header: 'Share Your Data',
      Text: "new" 

    },
    {
      src: 'https://i.imgur.com/XNA3mSB.jpg',
      altText: 'Slide 2',
      caption: 'Share and Cancel at Anytime',
      header: 'Control Your Data'
    },
    {
      src: 'https://i.imgur.com/ixBZ3lw.jpg',
      altText: 'Slide 3',
      caption: 'Sell Your Data Directly and Transparently',
      header: 'No Third Party'
    }
  ];
  
  const Slides = () => <UncontrolledCarousel items={items} />;
export default Slides;