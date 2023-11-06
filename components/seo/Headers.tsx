import React from 'react';
import { NextSeo } from 'next-seo';
import { seo } from '@/helpers/text_display';

type SeoProps = {
  title?: string;
  desc?: string;
};

function Headers({ title, desc }: SeoProps) {
  return <NextSeo title={title} description={desc} />;
}

export default Headers;

Headers.defaultProps = {
  title: seo.default.title,
  desc: seo.default.title,
};
