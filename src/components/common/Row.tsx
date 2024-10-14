// Row.tsx
import React from 'react';

interface RowProps {
    children: React.ReactNode;
    cols?: number; // Số cột trong layout
    gap?: string; // Khoảng cách giữa các cột
}

const Row: React.FC<RowProps> = ({ children, cols = 12, gap = '' }) => {
    return (
        <div className={`grid grid-cols-${cols} ${gap}`}>
            {children}
        </div>
    );
};

export default Row;

