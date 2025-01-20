import React, { useState } from "react";
import { FormContainer, ItemsContainer, Table, TableContainer, TableData, TableHeader, TableRow } from "../../globalStyles";
import HeaderNavigator from "../../elements/headerNavigator/HeaderNavigator";
import { useLang } from "../../contexts/LangContext";
import StyledInput from "../../elements/styledInput/StyledInput";
import { toast } from "react-toastify";
import StyledButton from "../../elements/styledButton/StyledButton";
import { useTheme } from "../../contexts/ThemeContext";
import ItemCard from "../../components/itemCard/ItemCard";
import SearchBar from "../../elements/searchBar/SearchBar";

const paymentsData = [
  {
    name: 'Laptop',
    quantity: 1,
    pricePerItem: 1200,
    date: '2025-01-10',
    totalPrice: 1200 * 1, // Total = Quantity * Price per Item
  },
  {
    name: 'Smartphone',
    quantity: 3,
    pricePerItem: 450,
    date: '2025-01-12',
    totalPrice: 450 * 3,
  },
  {
    name: 'Headphones',
    quantity: 2,
    pricePerItem: 150,
    date: '2025-01-15',
    totalPrice: 150 * 2,
  },
  {
    name: 'Monitor',
    quantity: 1,
    pricePerItem: 300,
    date: '2025-01-17',
    totalPrice: 300 * 1,
  },
  {
    name: 'Keyboard',
    quantity: 5,
    pricePerItem: 50,
    date: '2025-01-20',
    totalPrice: 50 * 5,
  },
  {
    name: 'Mouse',
    quantity: 4,
    pricePerItem: 30,
    date: '2025-01-22',
    totalPrice: 30 * 4,
  },
  {
    name: 'External Hard Drive',
    quantity: 1,
    pricePerItem: 100,
    date: '2025-01-25',
    totalPrice: 100 * 1,
  },
  {
    name: 'Webcam',
    quantity: 2,
    pricePerItem: 80,
    date: '2025-01-27',
    totalPrice: 80 * 2,
  },
  {
    name: 'USB-C Cable',
    quantity: 10,
    pricePerItem: 15,
    date: '2025-01-30',
    totalPrice: 15 * 10,
  },
  {
    name: 'Speakers',
    quantity: 1,
    pricePerItem: 200,
    date: '2025-02-02',
    totalPrice: 200 * 1,
  },
];



const Payments = () => {
  const { language, translations } = useLang();
  const defaultFromDate = new Date().toISOString().split("T")[0];
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(paymentsData);
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    pricePerItem: "",
    date: defaultFromDate,
    quantity: "",
    totalPrice: 0,
  });

  // Handle input changes
  const handleChange = (field) => (e) => {
    setPaymentInfo((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  
    const filtered = paymentsData.filter(
      (item) =>
        item.name.toLowerCase().includes(query)
    );
    setFilteredItems(filtered);
  };

  const handleSave = () => {
    const { name, pricePerItem, quantity, date } = paymentInfo;

    // Check if all fields are filled
    if (!name || !pricePerItem || !quantity || !date) {
      toast.error(translations.allFieldsRequired);
      return;
    }
    // Calculate total price
    const totalPrice = parseFloat(pricePerItem) * parseInt(quantity);
    setPaymentInfo((prev) => ({ ...prev, totalPrice }));

    // Log total price or proceed with further actions
    console.log("paymentInfo:", paymentInfo);
    toast.success(translations.addedSuccessfully); // Success message (optional)
  };

  return (
    <FormContainer language={language}>
      <HeaderNavigator
        title={translations.payments}
        description={translations.paymentsDescription}
      />
      <StyledInput
        label={translations.name}
        placeholder={translations.enterItemName}
        onChange={handleChange("name")}
        value={paymentInfo.name}
      />
      <StyledInput
        label={translations.quantity}
        placeholder={translations.enterItemQuantity}
        onChange={handleChange("quantity")}
        value={paymentInfo.quantity}
        type={"number"}
      />
      <StyledInput
        label={translations.pricePerItem}
        placeholder={translations.enterPricePerItem}
        onChange={handleChange("pricePerItem")}
        value={paymentInfo.pricePerItem}
        type={"number"}
      />
      <StyledInput
        label={translations.date}
        placeholder={translations.enterDate}
        onChange={handleChange("pricePerItem")}
        value={paymentInfo.date}
        type={"date"}
      />
      <StyledButton title={translations.add} onClick={handleSave} />

      {/* Search Bar */}
      <SearchBar onChange={handleSearch} value={searchQuery} />

     {/* Items List */}
     <ItemsContainer>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <ItemCard
              key={index}
              id={item.id}
              barcode={item.barcode}
              name={item.name}
              description={item.description}
              price={item.pricePerItem}
              quantity={item.quantity}
              total={item.totalPrice}
            />
          ))
        ) : (
          <p>{translations.noItemFound}</p>
        )}
      </ItemsContainer>
    </FormContainer>
  );
};

export default Payments;
