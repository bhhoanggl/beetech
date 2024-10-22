import React from 'react'
import Container from '../common/Container'
import { Link } from '@nextui-org/react'
import Typography from '../common/Typography'
import { ListboxWrapper } from '../common/ListboxWrapper'
import { ListItem } from '../common/ListItem'
import Row from '../common/Row'
import Col from '../common/Col'

const Footer: React.FC = () => {
    const items = [
        {
            key: "about",
            label: "Giới thiệu",
            href: '/about'
        },
        {
            key: "service",
            label: "Dịch vụ",
            href: '/'
        },
        {
            key: "project",
            label: "Dự án",
            href: '/'
        },
        {
            key: "contact",
            label: "Liên hệ",
            href: '/'
        }
    ];
    return (
        <footer className='pt-20'>
            <Container className='max-w-5xl'>
                <Row>
                    <Col full={true} md={4}>
                        <div className="logo">
                            <Link href={''} className='hover:opacity-100 w-[150px] sm:w-[200px]'>
                                <img src="/assets/logo.png" alt="" />
                            </Link>
                        </div>
                    </Col>
                    <Col full={true} md={4}>
                        <div className="item">
                            <Typography as='h5' className='text-xl font-bold'>Liên kết nhanh</Typography>
                            <ListboxWrapper>
                                {
                                    items.map((item, index) => (
                                        <ListItem key={index} className='py-2' href={item.href}>{item.label}</ListItem>
                                    ))
                                }
                            </ListboxWrapper>
                        </div>
                    </Col>
                    <Col full={true} md={4}>
                        <div className="item">
                            <Typography as='h5' className='text-xl font-bold'>Kết nối với chúng tôi</Typography>
                            <ListboxWrapper>
                                {
                                    items.map((item, index) => (
                                        <ListItem key={index} className='py-2' href={item.href}>{item.label}</ListItem>
                                    ))
                                }
                            </ListboxWrapper>
                        </div>
                    </Col>
                    <Col full={true} className='mt-4'>
                        <Typography as='p' className='text-center pt-4 pb-4 border-t-1'>
                            Bản quyền &copy; 2024 thuộc về Beetech.
                        </Typography>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer