import React from 'react'

import "./Tooltip.css"

export type TooltipTheme = 'dark' | 'white' | 'blue' | 'blue-light' | 'purple' | 'pink-light' | 'green' | 'green-light';

const ArchiveIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="16" height="4" rx="1" />
    <path d="M4 7v9a2 2 0 002 2h8a2 2 0 002-2V7" />
    <path d="M8 11h4" />
  </svg>
);

export type TooltipProps = {
  title: string,
  children?: React.ReactNode,
  theme: TooltipTheme,
  onClose?: () => void,
  className?: string,
};


export const Tooltip = (
    {
  title,
  children,
  theme = 'dark',
  onClose,
  className = '',
    }: TooltipProps
) => {
     return (
    <div className={`tooltip tooltip-${theme} className`} role="tooltip">
      <div className={'tooltip-iconWrapper'}><ArchiveIcon/></div>
      <div className={'tooltip-content'}>
        {title && <p className={`tooltip-title tooltip-${theme}`}>{title}</p>}
        {children && <p className={`tooltip-description tooltip-${theme}`}>{children}</p>}
      </div>

      {onClose && (
        <button
          type="button"
          className={'closeButton'}
          onClick={onClose}
          aria-label="Close tooltip"
        >
          <svg className={'tooltip-icon'} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </div>
  );
}