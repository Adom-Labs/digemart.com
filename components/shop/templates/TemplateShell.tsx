import Image from 'next/image';
import React from 'react';
import TemplateHeader from './TemplateHeader';

// Example product card
function Product({ product }: { product: any }) {
  const { name, price, imageUrl } = product;

  return (
    <div className='product'>
      <div className='h-[100px] w-full relative'>
        <Image src={imageUrl} alt={name} fill />
      </div>
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
}

// Define TemplateShell component
function TemplateShell({ data }: { data: any }) {
  // Extract data from props
  const { storeName, products, header, primaryColor, secondaryColor, fonts } =
    data;

  // Apply header styles
  const headerStyle = {
    backgroundColor: header.backgroundColor,
    color: header.textColor,
    // ... other header styles
  };

  // Apply font styles
  const headingStyle = { fontFamily: fonts.heading };
  const bodyStyle = { fontFamily: fonts.body };

  return (
    <div>
      {/* Header */}
      <TemplateHeader
        {...headerStyle}
        navigationLinks={[]}
        storeName={storeName}
        textColor=''
      />

      {/* Products */}
      <section>
        <h2 style={headingStyle}>Products</h2>
        <div className='product-grid'>
          {products.map((product: any) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Other sections/components */}
      {/* ... additional sections/components using the provided data */}
    </div>
  );
}

export default TemplateShell;
