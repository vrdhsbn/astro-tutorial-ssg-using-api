import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const Slider = () => {
  const slideItems = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
  ]

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      centeredSlides={true}
      loop={true}
      autoplay={{ delay: 3000 }}
      navigation={true}
      modules={[Autoplay, Navigation]}
    >
      {slideItems.map((item) => (
        <SwiperSlide>
          <img src={`${item}`} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
