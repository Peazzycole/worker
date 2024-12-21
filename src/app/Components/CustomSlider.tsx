"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/free-mode";
import { useState } from 'react';
import DashboardUserCard from './Ui/DashboardUserCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { users } from '../data';

type Props = {
    setIndex: (index: number) => void
    openModal: () => void
}


export default function CustomSlider({ setIndex, openModal }: Props) {
    const [activeIndex, setActiveIndex] = useState(0); // Track active slide

    return (
        <div className='w-full flex flex-col h-full'>
            <Swiper
                direction='horizontal'
                navigation={{
                    nextEl: '.swiper-button-nextt',
                    prevEl: '.swiper-button-prevv',
                    hideOnClick: true
                }}
                spaceBetween={16}
                modules={[Navigation]}
                loop={true}
                className="w-full h-full md:max-w-[300px] xl:max-w-[700px] 2xl:max-w-[900px]  pb-5"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                breakpoints={{
                    1280: {
                        slidesPerView: 2,

                    },
                    0: {
                        slidesPerView: 1,

                    },
                }}
            >
                <div className='flex-1 h-full'>
                    {users.map((user, i) => (
                        <SwiperSlide key={i}>
                            <div className='h-full' onClick={() => {
                                setIndex(i)
                                openModal()
                            }}>
                                <DashboardUserCard name={user.name} image={user.image} topic={user.topic} />
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
            <div className='bg-secondary-50 swiper-button-nextt cursor-pointer hidden absolute md:-right-5 lg:-right-0 xl:-right-10 top-1/2 transform -translate-y-1/2 z-50 p-[10px] md:flex items-center justify-center rounded-full'>
                <div className=" bg-white size-12 shadow-2xl flex items-center justify-center rounded-full border-2 border-gray-200 cursor-pointer">
                    <ArrowForwardIosIcon sx={{ color: "blue", width: 24, height: 24 }} />
                </div>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
                {users.map((_, index) => (
                    <button
                        key={index}
                        className={`rounded h-[4px] ${activeIndex === index ? 'bg-[#5c48cc] w-10 ' : 'bg-gray-200 w-1'
                            }`}
                        onClick={() => setActiveIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
}

