import React, { useState } from 'react';
import { ItemInfoCont, Row } from './ItemInfo.Style';
import { BoldTypography, LightTypography } from '../../elements/typography/Typography';
import { useLang } from '../../contexts/LangContext';
import StyledButton from '../../elements/styledButton/StyledButton';
import StyledInput from '../../elements/styledInput/StyledInput';
import { toast } from 'react-toastify';
import { updateDocumentInCollection } from '../../functions/firebaseFunctions';

const ItemInfo = ({ item,SetlefWdour,togglePopup }) => {
  const { translations } = useLang();
  const [itemInfo, setItemInfo] = useState({ numberOfItems: '' });

  const handleChange = (field) => (e) => {
    setItemInfo((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSell = async () => {
    const soldQuantity = parseInt(itemInfo.numberOfItems, 10);
    
    if (isNaN(soldQuantity) || soldQuantity <= 0) {
      toast.error('Please enter a valid number of items to sell.');
      return;
    }

    if (soldQuantity > item.quantity) {
      toast.error('Not enough items available.');
      return;
    }

    const updatedQuantity = item.quantity - soldQuantity;
    const updatedData = { quantity: updatedQuantity };

    try {
      await updateDocumentInCollection('items', item.id, updatedData);
      SetlefWdour((prev) => prev + 1)
      toast.success('Item quantity updated successfully!');
      togglePopup()
    } catch (error) {
      console.error('Error updating document:', error);
      toast.error('Failed to update item quantity. Please try again.');
    }
  };

  return (
    <ItemInfoCont>
      <Row>
        <BoldTypography text={`${translations.name}:`} />
        <LightTypography text={item.name} />
      </Row>
      <Row>
        <BoldTypography text={`${translations.price}:`} />
        <LightTypography text={item.price} />
      </Row>
      <Row>
        <BoldTypography text={`${translations.quantity}:`} />
        <LightTypography text={item.quantity} />
      </Row>
      <Row>
        <BoldTypography text={`${translations.barCode}:`} />
        <LightTypography text={item.barcode} />
      </Row>
      {item.description && (
        <Row>
          <BoldTypography text={`${translations.description}:`} />
          <LightTypography text={item.description} />
        </Row>
      )}
      <StyledInput
        placeholder=""
        type="number"
        label="Number of items"
        value={itemInfo.numberOfItems}
        onChange={handleChange('numberOfItems')}
      />
      <StyledButton
        title="Sell"
        onClick={handleSell}
      />
    </ItemInfoCont>
  );
};

export default ItemInfo;
