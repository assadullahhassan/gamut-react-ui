import React from 'react';


import './Toast.css';
const Icons = {
  success: (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  warning: (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  information: (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  error: (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
};

export type ToastType = "success" | "warning" | "information" | "error";

export interface ToastProps {
  type?: ToastType;
  title: string;
  children?: React.ReactNode;
}

export const Toast = ({ type = "information", title, children }: ToastProps) => {
  return (
    <div className={'toast ' + `toast-${type}`} role="alert">
      <div className="toast-icon toast-iconWrapper">{Icons[type]}</div>
      <div className="toast-content">
         <p className={'toast-title ' + `toast-${type}`}>{title}</p>
        {children && <p className={'toast-description ' + `toast-${type}`}>{children}</p>}
      </div>
    </div>
  );
};


Toast.displayName = "Toast";