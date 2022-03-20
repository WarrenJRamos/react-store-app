import React from 'react';
import ProductSide from '../../../Styles/Products/ProductsSide.styled';
import { Form } from 'react-bootstrap';

const ProductsSideBar = (props) => {
  return (
    <ProductSide className={`${props.classes} side`}>
      <div className='title'>
        <span>New Items</span>
      </div>
      <div className='price'>
        <Form.Label>Price</Form.Label>
        <Form.Range className='range' />
      </div>
      <div className='rating'>
        <Form.Select aria-label='Default select example'>
          <option>Rating</option>
          <option value='1'>5</option>
          <option value='2'>4</option>
          <option value='3'>3</option>
          <option value='4'>2</option>
          <option value='5'>1</option>
        </Form.Select>
      </div>
    </ProductSide>
  );
};

export default ProductsSideBar;
