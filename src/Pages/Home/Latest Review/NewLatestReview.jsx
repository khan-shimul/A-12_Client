import React, { useRef, useState } from 'react';
import useAxiosPublic from '../../../Components/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter'


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import '../Latest Review/css/style.css';



import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const NewLatestReview = () => {
    const axiosPublic=useAxiosPublic()

    const{refetch,data:reviews=[]}=useQuery({
        queryKey:['latestReviews'],
        queryFn:async ()=>{
            const res=await axiosPublic.get('/reviews')
         return res.data
        }
        
    })
console.log(reviews)


const progressCircle = useRef(null);
const progressContent = useRef(null);
const onAutoplayTimeLeft = (s, time, progress) => {
  progressCircle.current.style.setProperty('--progress', 1 - progress);
  progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
};
    return (
        <div className=' py-11 bg-[#ede7e7]'>
          <h1 className='text-center  text-4xl font-bold text-orange-500 '>Users <Typewriter
           words={['Latest Reviews is here!']}
           loop={5}
           cursor
           cursorStyle='_'
           typeSpeed={90}
           deleteSpeed={50}
           delaySpeed={1300}
           ></Typewriter></h1>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
  {
                    reviews.map(review => <SwiperSlide>
                      <div  className='mb-10'>
                    <div  className="avatar">
                    <div className="mask mask-squircle w-32 ">
                      
                      <img  src={review.userImg} alt="" /></div>
                    </div>
                      <div>
                      <h4 className="font-bold mt-4"><span className='text-orange-500 mr-2'>Name:</span>{review.userName}</h4>
                      <div className='flex gap-7'>
                      <h4 className="font-bold mt-2"><span className='text-orange-500 mr-2'>Reviewed For:</span>{review.propertyName}</h4>    
                      <h4 className="font-bold mt-2"><span className='text-orange-500 mr-2'>Time:</span>{review.time}</h4>    
                      </div>
                      <h1 className='mt-2 text-sm'>{review.reviewDes}</h1>
                      </div>
                      </div>
                      </SwiperSlide>)
                }

       
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

            
        </div>
    );
};

export default NewLatestReview;