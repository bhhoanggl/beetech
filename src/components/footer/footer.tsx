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
            href: '/service'
        },
        {
            key: "project",
            label: "Dự án",
            href: '/project'
        },
        {
            key: "contact",
            label: "Liên hệ",
            href: '/contact'
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
        <footer className='py-20'>
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
                            <Typography as='h5' className='text-xl font-bold'>Dịch vụ của chúng tôi</Typography>
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
                </Row>
            </Container>
        </footer>
    )
}

export default Footer