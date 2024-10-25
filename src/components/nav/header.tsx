import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
import Container from '../common/Container';
import { Image } from "@nextui-org/react";
import { Navbar, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { t } = useTranslation();
    const menuItems = [
        t("header.gioithieu"),
        t("header.dichvu"),
        t("header.duan"),
        t("header.khoahoc"),
        t("header.blog"),
        t("header.lienhe"),
    ];


    return (
        <Navbar id='nav' onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll className='px-0 py-2 w-full h-[60px] sm:h-[83px]' classNames={{
            wrapper: 'p-0 max-w-full h-auto',
            base: 'fixed bg-white'
        }}>
            <Container className='flex items-center gap-8'>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden h-6"
                    />
                    <Link to={'/'} className='logo'>
                        <Image
                            alt=""
                            src="/assets/logo.png"
                            classNames={{
                                wrapper: 'rounded-none w-[55px] md:w-[91px]'
                            }}
                            className='rounded-none'
                        />
                    </Link>
                </NavbarContent>
                <NavbarContent className='hidden sm:flex ' justify={'end'}>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="lg:text-xl md:text-base whitespace-nowrap"
                                to="#"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                    <LanguageSwitcher />
                </NavbarContent>
                <NavbarMenu portalContainer={document.getElementById('nav') || undefined} className='bg-primary-bullet top-full'>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full text-white text-xl font-semibold"
                                to="#"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
                <div className="block sm:hidden">
                    <LanguageSwitcher />
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;
