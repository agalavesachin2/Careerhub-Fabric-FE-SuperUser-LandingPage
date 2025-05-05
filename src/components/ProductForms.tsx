import React from "react";
import { Element } from 'react-scroll';

type Tag = {
  name: string;
  url: string;
};

type ProductFormsProps = {
  productFormsData: {
    title: string;
    description: string;
    tags: Tag[];
  };
};

function ProductForms({ productFormsData }: ProductFormsProps) {
  return (
   
    <section className="product-forums">
       <Element name='ProductForms'>
      <h3>{productFormsData.title}</h3>
      <p>{productFormsData.description}</p>
      <div className="tagsContainer">
        {productFormsData.tags.map((tag, index) => (
          <a
            key={index}
            href={tag.url}
            // target="_blank"
            rel="noopener noreferrer"
            className="tag"
          >
            {tag.name}
          </a>
        ))}
      </div>
      </Element>
    </section>
    
  );
}

export default ProductForms;
