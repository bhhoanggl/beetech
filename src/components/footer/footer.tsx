import React from 'react'
import Container from '../common/Container'
import { Link } from '@nextui-org/react'

const Footer: React.FC = () => {
    return (
        <footer>
            <Container className=''>
                <div className="grid grid-cols-3">
                    <div className="logo">
                        <Link href={''} className='hover:opacity-100 w-[150px] sm:w-[200px]'>
                            <img src="/assets/logo.png" alt="" />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer