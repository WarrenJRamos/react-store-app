import React, { useState } from 'react';
import ProductSide from '../../../Styles/Products/ProductsSide.styled';
import { Form } from 'react-bootstrap';
import Slider from '@mui/material/Slider';
const ProductsSideBar = (props) => {
  function valuetext(value) {
    return `$${value}`;
  }

  const [value, setValue] = useState([0, 50]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <ProductSide className={`${props.classes} side`}>
      <div className='title'>
        <span>New Items</span>
      </div>
      <div className='price'>
        <span>Price</span>
        <Slider
          className='range'
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay='auto'
          getAriaValueText={valuetext}
        />
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
