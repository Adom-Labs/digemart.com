import React from 'react';

function WrapContent(props: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto px-5 md:px-8 ${props.className || ''}`}>
      {props.children}
    </div>
  );
}

export default WrapContent;
