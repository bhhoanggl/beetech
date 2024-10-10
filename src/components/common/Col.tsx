import React from 'react';

interface ColProps {
    children: React.ReactNode;
    span?: number;  // Số cột mặc định (1-12)
    sm?: number;    // Số cột cho màn hình nhỏ (sm)
    md?: number;    // Số cột cho màn hình trung bình (md)
    lg?: number;    // Số cột cho màn hình lớn (lg)
    xl?: number;    // Số cột cho màn hình rất lớn (xl)
    full?: boolean; // Chiếm toàn bộ hàng (col-span-full)
    className?: string; // Class bổ sung từ ngoài
}

const Col: React.FC<ColProps> = ({ children, span, sm, md, lg, xl, full, className = '' }) => {
    // Tạo các class Tailwind dựa trên các prop
    const responsiveClasses = [
        full ? 'col-span-full' : '',           // Class cho việc chiếm toàn bộ hàng
        span ? `col-span-${span}` : '',        // Class cho cột mặc định
        sm ? `sm:col-span-${sm}` : '',         // Class cho màn hình nhỏ
        md ? `md:col-span-${md}` : '',         // Class cho màn hình trung bình
        lg ? `lg:col-span-${lg}` : '',         // Class cho màn hình lớn
        xl ? `xl:col-span-${xl}` : '',         // Class cho màn hình rất lớn
    ]
        .filter(Boolean)                        // Lọc ra các class hợp lệ
        .join(' ');                             // Ghép các class lại với nhau

    return (
        <div className={`${responsiveClasses} ${className}`}>
            {children}
        </div>
    );
};

export default Col;
