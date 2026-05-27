import React from 'react';
import { Carousel } from 'react-bootstrap';
import { banners } from '../data/bannerData';

function MyCarousel() {
  return (
    <Carousel fade interval={3000} controls={true} indicators={true} className="shadow-sm rounded overflow-hidden">
      {banners.map((banner) => (
        <Carousel.Item key={banner.id}>
          <div className="carousel-img-wrapper" style={{ position: 'relative', height: '450px', backgroundColor: '#000' }}>
            <img
              className="d-block w-100 h-100"
              src={banner.imageURL}
              alt={banner.title}
              style={{ objectFit: 'cover', opacity: '0.85' }}
            />
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 100 + '%',
                height: 100 + '%',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))',
                zIndex: 1
              }}
            />
          </div>
          <Carousel.Caption style={{ zIndex: 2, paddingBottom: '40px' }}>
            <h2 className="display-5 fw-bold text-white mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)', fontFamily: 'system-ui, sans-serif' }}>
              {banner.title}
            </h2>
            <p className="fs-5 text-light-50" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.6)', fontFamily: 'system-ui, sans-serif' }}>
              {banner.caption}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
