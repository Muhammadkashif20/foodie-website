import React from 'react';
import { Carousel } from 'antd';
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';
// const contentStyle = {
//   margin: 0,
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };
const BannerCarousel = () => (
  <Carousel autoplay>
    <div>
      <img src={banner1} className="w-full h-[350px] object-cover"
      />
    </div>
    <div>
      <img src={banner2} className="w-full h-[350px] object-cover"
      />
    </div>
    <div>
      <img src={banner3} className="w-full h-[350px] object-cover"
      />
    </div>

  </Carousel>
);
export default BannerCarousel; 