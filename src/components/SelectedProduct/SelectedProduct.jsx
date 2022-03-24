import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { SelectedComponent } from '../../Styles/SlectedProduct/SelectedComponent';
const SelectedProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);

  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h2>Loading, Please Wait...</h2>;

  console.log(product);
  return <SelectedComponent>SelectedProduct</SelectedComponent>;
};

export default SelectedProduct;
