import React from 'react';
import TextLeftImageRight from './headers/TextLeftImageRight';
import useShop from '@/providers/ShopProvider';
import StackedNoImage from './headers/StackedNoImage';
import { HeaderArrangeMent } from '@/types/ShopApiDataType';
import StackedBg from './headers/StackedBg';
import StackedImage from './headers/StackedImage';

const TemplateHeader = () => {
  const { header } = useShop();
  let arrangement: HeaderArrangeMent = header.arrangement;
  return (
    <>
      {arrangement === 'stacked_no_image' && <StackedNoImage />}
      {arrangement === 'text_left_image_right' && <TextLeftImageRight />}
      {arrangement === 'stacked_bg' && <StackedBg />}
      {arrangement === 'stacked_image' && <StackedImage />}
    </>
  );
};

export default TemplateHeader;
