import React from 'react';
import style from './active-label.module.css';

export interface ActiveLabelProps {
  children: React.ReactNode;
}

export default function ActiveLabel({ children }: ActiveLabelProps) {
  return <div className={style.label}>{children}</div>;
}
