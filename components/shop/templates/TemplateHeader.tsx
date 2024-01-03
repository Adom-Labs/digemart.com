import Image from 'next/image';
import React from 'react';

interface HeaderProps {
  backgroundColor: string;
  textColor: string;
  navigationLinks: { label: string; url: string }[];
  storeName: string;
  headerImage?: string;
  headerText?: string;
  arrangement?: 'image-left-text-right' | 'text-left-image-right' | 'stacked';
}

const TemplateHeader: React.FC<HeaderProps> = ({
  backgroundColor,
  textColor,
  navigationLinks,
  storeName,
  headerImage,
  headerText,
  arrangement = 'stacked',
}) => {
  // Apply header styles
  const headerStyle = {
    backgroundColor,
    color: textColor,
    // ... other header styles
  };

  function GetArrangementStyle() {
    let arrangementStyle: 'row' | 'row-reverse' | 'column' | 'column-reverse' =
      'column';
    switch (arrangement) {
      case 'image-left-text-right':
        arrangementStyle = 'row';
        break;
      case 'text-left-image-right':
        arrangementStyle = 'row-reverse';
        break;
      case 'stacked':
      default:
        arrangementStyle = 'column';
    }
    return arrangementStyle;
  }

  return (
    <header style={{ ...headerStyle, flexDirection: GetArrangementStyle() }}>
      <div>
        {/* Header Image */}
        {headerImage && <Image src={headerImage} alt='Header' fill />}
      </div>
      <div>
        {/* Header Text */}
        <h1>{storeName}</h1>
        {/* Navigation Links */}
        <nav>
          <ul>
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default TemplateHeader;
