import React from 'react';
import TextLeftImageRight from './headers/TextLeftImageRight';
import useShop from '@/providers/ShopProvider';
import StackedNoImage from './headers/StackedNoImage';

const TemplateHeader = () => {
  const { header } = useShop();
  return (
    <>
      {header.arrangement === 'stacked_no_image' && <StackedNoImage />}
      {header.arrangement === 'text_left_image_right' && <TextLeftImageRight />}
    </>
  );
};

export default TemplateHeader;
