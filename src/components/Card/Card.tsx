import React from 'react';
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import './Card.css';

const DefaultIcon = () => (
  <svg
    className='card-icon'
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M12 12v9" />
    <path d="m16 16-4-4-4 4" />
  </svg>
);

export type CardProps = {
  title: string;
  isHovered?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const Card = ({ 
    icon = <DefaultIcon />,
    isHovered = false,
    title,
    children,
    className = '',
}: CardProps) => {
  return (
    <div className={'card' + (isHovered ? ' is-hovered' : '') + ' ' + className}>
      <div className={'icon-badge'}>{icon}</div>
      <div className={'card-content'}>
        {title && <h3 className={'card-title'}>{title}</h3>}
        {children && <p className={'card-description'}>{children}</p>}
      </div>
    </div>
  );
};


Card.displayName = 'Card';
