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
            key: "new",
            label: "New file",
            href: '/'
        },
        {
            key: "copy",
            label: "Copy link",
            href: '/'
        },
        {
            key: "edit",
            label: "Edit file",
            href: '/'
        },
        {
            key: "delete",
            label: "Delete file",
            href: '/'
        }
    ];
    return (
        <footer className='py-20'>
            <Container className=''>
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
                </Row>
            </Container>
        </footer>
    )
}

export default Footer