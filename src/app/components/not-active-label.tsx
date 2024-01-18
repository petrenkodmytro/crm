import React from 'react';
import style from './not-active-label.module.css';

export interface NotActiveLabelProps {
  children: React.ReactNode;
}

export default function NotActiveLabel({ children }: NotActiveLabelProps) {
  return <div className={style.label}>{children}</div>;
}
