import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './styles/slideshow.css'

const items = [
    {
      src: 'https://i.imgur.com/1QoqSRk.jpg',
      altText: 'Slide 1',
      caption: 'Earn Extra Money Each Month',
      header: 'Share Your Data',
      Text: "new"

    },
    {
      src: 'https://i.imgur.com/XNA3mSB.jpg',
      altText: 'Slide 2',
      caption: 'You Hold the Power',
      header: 'Control Your Data'
    },
    {
      src: 'https://i.imgur.com/ixBZ3lw.jpg',
      altText: 'Slide 3',
      caption: 'Cancel at Anytime',
      header: 'Have a Voice'
    }
  ];

  const Slides = () => <UncontrolledCarousel items={items} />;
export default Slides;
