import React from 'react';
import { Link } from 'react-router-dom';

interface ListItemProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    linkClassName?: string;
}

export const ListItem: React.FC<ListItemProps> = ({ href, children, className, linkClassName }) => (
    <li className={className}>
        <Link to={href} className={linkClassName}>
            {children}
        </Link>
    </li>
);
