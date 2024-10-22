// Row.tsx
import React from 'react';

interface RowProps {
    children: React.ReactNode;
    cols?: number; // Số cột trong layout
    gap?: string; // Khoảng cách giữa các cột
    className?: string;
}

const Row: React.FC<RowProps> = ({ children, cols = 12, gap = '', className }) => {
    return (
        <div className={`grid grid-cols-${cols} ${gap} ${className}`}>
            {children}
        </div>
    );
};

export default Row;

