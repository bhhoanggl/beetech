import { Button } from '@nextui-org/react'
import React from 'react'

const MainBanner: React.FC = () => {
    return (
        <section className='main-banner'>
            <video className="banner-video" autoPlay loop muted>
                <source src="/assets/background-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
                <h1 className='text-3xl sm:text-6xl font-bold uppercase text-center'>nâng tầm thương hiệu của bạn</h1>
                <p className='text-lg sm:text-2xl text-center'>Dịch vụ website chuyên nghiệp, phát triển thương hiệu vượt trội!</p>
                <Button className="cta-button">Tìm hiểu thêm</Button>
            </div>
        </section>
    )
}

export default MainBanner