import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './Gallery.css'
 
class Gallery extends React.Component {
  render() {
 
    const images = [
      {
        original: '/img/Splashback.jpg',
        thumbnail: '/img/Splashback.jpg'
      },
      {
        original: '/img/outdoor-balustrade.jpg',
        thumbnail: '/img/outdoor-balustrade.jpg'
      },
      {
        original: '/img/white-splashback.jpg',
        thumbnail: '/img/white-splashback.jpg'
      },
      {
        original: '/img/Stair-Balustrade.jpg',
        thumbnail: '/img/Stair-Balustrade.jpg',
        description: 'Render custom slides within the gallery',
      }
    ]
 
    return (
      <ImageGallery 
        items={images} 
        showFullscreenButton={false} 
        showPlayButton={false}
        
    />
    );
  }
 
}

export default Gallery;