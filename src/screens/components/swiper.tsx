import { ReactNode } from 'react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

interface SlideProps {
  children: ReactNode | ReactNode[];
}

export const Slide = ({ children }: SlideProps) => {
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={-60}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="flex w-full"
    >
      {Array.isArray(children)
        ? (children as ReactNode[]).map((child: ReactNode) => (
          <SwiperSlide key={Math.random()}>{child}</SwiperSlide>
        ))
        : <SwiperSlide>{children}</SwiperSlide>
      }
    </Swiper>
  )
}