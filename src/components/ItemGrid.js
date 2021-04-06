import React from 'react';
import styled from 'styled-components';
import { getKeyword, getPrintCart } from '../reducers';
import { STORE_ITEMS } from '../data';
import { useSelector } from 'react-redux';

import StoreItem from './StoreItem';

const ItemGrid = () => {
  const keyword = useSelector(getKeyword);
  const las = useSelector(getPrintCart);

  const filteredProducts = STORE_ITEMS.filter((product)=>{
    let productTitle = product.title.toLowerCase();
    return productTitle.indexOf(keyword.keyword) > -1;
  });
  return (
    <Wrapper>
      {filteredProducts.length > 0 && filteredProducts.map((item) => (
        <StoreItem key={item.id} {...item} />
      ))}

    {filteredProducts.length === 0 &&
			<h3 className="noProduct">Aucun produit n'a été trouvé</h3>
		}   
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 24px;
`;

export default ItemGrid;
