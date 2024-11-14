import React from 'react'
// import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import { Link } from '@nextui-org/react'
import Container from '../common/Container'
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
    // const social = [
    //     {
    //         key: "facebook",
    //         label: "Facebook",
    //         href: '/',
    //         icon: `${<IconBrandFacebook />}`
    //     },
    //     {
    //         key: "instagram",
    //         label: "Instagram",
    //         href: '/',
    //         icon: `${<IconBrandInstagram />}`
    //     },
    //     {
    //         key: "github",
    //         label: "Github",
    //         href: '/',
    //         icon: `${<IconBrandGithub />}`
    //     },
    //     {
    //         key: "linkedin",
    //         label: "LinkedIn",
    //         href: '/',
    //         icon: `${<IconBrandLinkedin />}`
    //     }
    // ];

    return (
        <footer className='pt-20'>
            <Container className='max-w-5xl'>
                <Row className='gap-y-3'>
                    <Col full={true} md={4}>
                        <div className="logo">
                            <Link href={''} className='hover:opacity-100 w-[150px] sm:w-[200px]'>
                                <img src="/assets/logo.png" alt="" />
                            </Link>
                        </div>
                        <div className="infor">

                        </div>
                    </Col>
                    <Col span={6} md={4}>
                        <div className="item">
                            <Typography as='h5' className='text-base font-bold'>Liên kết nhanh</Typography>
                            <ListboxWrapper>
                                {
                                    items.map((item, index) => (
                                        <ListItem key={index} className='py-2 text-sm' href={item.href}>{item.label}</ListItem>
                                    ))
                                }
                            </ListboxWrapper>
                        </div>
                    </Col>
                    <Col span={6} md={4}>
                        <div className="item">
                            <Typography as='h5' className='text-base font-bold'>Kết nối với chúng tôi</Typography>
                            <ListboxWrapper>
                                {
                                    items.map((item, index) => (
                                        <ListItem key={index} className='py-2 text-sm' href={item.href}>{item.label}</ListItem>
                                    ))
                                }
                            </ListboxWrapper>
                        </div>
                    </Col>
                    <Col full={true}>
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