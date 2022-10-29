import React from 'react'

const Carousel = () => {
  return (
    <div><div className="carousel w-full pt-10 pb-10">
    <div id="slide1" className="carousel-item relative w-full">
      <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1167,c_limit/02515929-eb4b-469d-ad2f-fb372fc7acf1/sitio-web-oficial-de-nike.png" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1167,c_limit/d623182f-878a-41df-9833-313d90d52ea4/sitio-web-oficial-de-nike.png" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
      <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1167,c_limit/85b1cd26-23ff-44a1-80b6-360ce24cf5ed/sitio-web-oficial-de-nike.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 

        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>


  </div></div>
  )
}

export default Carousel