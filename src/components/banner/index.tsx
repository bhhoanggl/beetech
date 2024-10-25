import { Button } from '@nextui-org/react'
import React from 'react'
import { Image } from "@nextui-org/react";

const MainBanner: React.FC = () => {
    return (
        <section className='main-banner'>
            <div className="banner-img">
                <Image src="/assets/bg_pics.jpg" alt="" className='h-screen object-cover' />
                <div className="overlay z-10">
                    <h1 className='text-3xl sm:text-6xl font-bold uppercase text-center'>nâng tầm thương hiệu của bạn</h1>
                    <p className='text-lg sm:text-2xl text-center'>Dịch vụ website chuyên nghiệp, phát triển thương hiệu vượt trội!</p>
                    <Button className="cta-button">Tìm hiểu thêm</Button>
                </div>
            </div>
        </section>
    )
}

export default MainBanner