import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './Gallery.css'
 
class Gallery extends React.Component {
  render() {
 
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        description: 'Render custom slides within the gallery',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]
 
    return (
      <ImageGallery 
        items={images} 
        showFullscreenButton={false} 
        showPlayButton={false}
        style={{maxHeight: '600px'}}
    />
    );
  }
 
}

export default Gallery;