import React from 'react';
import 'components/WebSite/Premium/components/style.scss';

interface PHeaderProps {
  title: string;
  subtitle?: string;
}

const PHeader = ({ title, subtitle }: PHeaderProps) => {
  return (
    <header className="premium-header">
      <h2 className="title">{title}</h2>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </header>
  );
};

export default PHeader;
