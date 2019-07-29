import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './Gallery.css'
 
class Gallery extends React.Component {
  render() {
 
    const images = [
      {
        original: '/img/splashbacks/green-splashback.jpg',
        thumbnail: '/img/splashbacks/green-splashback.jpg'
      },
      {
        original: '/img/balustrades/outdoor-balustrade.jpg',
        thumbnail: '/img/balustrades/outdoor-balustrade.jpg'
      },
      {
        original: '/img/splashbacks/white-splashback.jpg',
        thumbnail: '/img/splashbacks/white-splashback.jpg'
      },
      {
        original: '/img/balustrades/Stair-Balustrade.jpg',
        thumbnail: '/img/balustrades/Stair-Balustrade.jpg',
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