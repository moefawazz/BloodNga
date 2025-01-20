import React, { useEffect, useState } from "react";
import StyledInput from "../../elements/styledInput/StyledInput";
import { FormContainer } from "../../globalStyles";
import StyledButton from "../../elements/styledButton/StyledButton";
import ItemCard from "../../components/itemCard/ItemCard";
import HeaderNavigator from "../../elements/headerNavigator/HeaderNavigator";
import { ItemsContainer } from "./Item.style";
import { useLang } from "../../contexts/LangContext";
import SearchBar from "../../elements/searchBar/SearchBar";
import { addDocumentToCollection, deleteDocumentFromCollection, fetchCollectionData, updateDocumentInCollection } from "../../functions/firebaseFunctions";
import { toast } from "react-toastify";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useTheme } from "../../contexts/ThemeContext";
import Popup from "../../elements/popUp/PopUp";
import ItemInfo from "../../components/itemInfo/ItemInfo";

const Items = () => {
  const { language, translations } = useLang();
  const { theme } = useTheme();
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [itemInfo, setItemInfo] = useState({
    name: "",
    price: "",
    description: "",
    quantity: "",
    barcode: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [editingItemId, setEditingItemId] = useState(null); // New state to track editing item
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
const[lefWdour,SetlefWdour]=useState(0)

  const togglePopup = (item) => {
    setSelectedItem(item); // Set the clicked item's data
    setPopupOpen(!isPopupOpen);
  };

  const fetchData = async () => {
    try {
      const data = await fetchCollectionData("items");
      const normalizedData = data.map((item) => ({
        ...item,
        name: item["name "] || item.name, 
      }));
      setItems(normalizedData);
      setFilteredItems(normalizedData); 
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("editingItemId", editingItemId)
  }, []);
  useEffect(() => {
    fetchData();
  }, [lefWdour]);

  // Handle input changes
  const handleChange = (field) => (e) => {
    setItemInfo((prev) => ({ ...prev, [field]: e.target.value }));
  };

  // Handle saving an item (either new or updated)
  const handleSave = async () => {
    try {
      const trimmedItemInfo = {
        ...itemInfo,
        name: itemInfo.name.trim(),
        description: itemInfo.description.trim(),
      };

      if (
        !trimmedItemInfo.name ||
        !trimmedItemInfo.price ||
        !trimmedItemInfo.barcode ||
        !trimmedItemInfo.quantity
      ) {
        toast.error(translations.allFieldsRequired);
        return;
      }

      if (editingItemId) {
        // Update existing item
        await updateDocumentInCollection("items", editingItemId, trimmedItemInfo);
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.id === editingItemId ? { ...item, ...trimmedItemInfo } : item
          )
        );
        setFilteredItems((prevItems) =>
          prevItems.map((item) =>
            item.id === editingItemId ? { ...item, ...trimmedItemInfo } : item
          )
        );
        toast.success(translations.updatedSuccessfully);
      } else {
        // Add new item
        await addDocumentToCollection("items", trimmedItemInfo);
        setItems((prevItems) => [...prevItems, trimmedItemInfo]);
        setFilteredItems((prevItems) => [...prevItems, trimmedItemInfo]);
        fetchData();
        toast.success(translations.addedSuccessfully);
      }

      // Reset form after saving
      setItemInfo({
        name: "",
        price: "",
        description: "",
        quantity: "",
        barcode: "",
      });
      setEditingItemId(null); // Reset editing item state
    } catch (error) {
      toast.error(translations.addedUnsuccessfully);
      console.error("Error saving item:", error);
    }
  };

const handleSearch = (e) => {
  const query = e.target.value.toLowerCase();
  setSearchQuery(query);

  const filtered = items.filter(
    (item) =>
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.barcode.toLowerCase().includes(query)
  );
  setFilteredItems(filtered);
};

  // Initialize barcode scanner
  const initializeBarcodeReader = () => {
    const scanner = new Html5QrcodeScanner("barcode-reader", {
      fps: 10,
      qrbox: { width: 250, height: 100 },
    });

    scanner.render(
      (decodedText) => {
        setItemInfo((prev) => ({ ...prev, barcode: decodedText }));

        setSearchQuery(decodedText);
        const filtered = items.filter((item) =>
          item.barcode.toLowerCase().includes(decodedText.toLowerCase())
        );
        
        setFilteredItems(filtered);
        scanner.pause(); 
      },
      (error) => {
        console.error("Scanning error:", error);
      }
    );
  };

  // Handle Edit action
  const handleEdit = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    if (itemToEdit) {
      setItemInfo({
        name: itemToEdit.name,
        price: itemToEdit.price,
        description: itemToEdit.description,
        quantity: itemToEdit.quantity,
        barcode: itemToEdit.barcode,
      });
      setEditingItemId(id); // Set the item ID for editing
    }
  };

  // Handle Delete action
  const handleDelete = async (id) => {
    try {
      await deleteDocumentFromCollection("items", id);
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      setFilteredItems((prevItems) => prevItems.filter((item) => item.id !== id));
      toast.success(translations.deletedSuccessfully);
    } catch (error) {
      toast.error(translations.deletedUnsuccessfully);
      console.error("Error deleting item:", error);
    }
  };

  return (
    <FormContainer language={language} theme={theme}>
      {/* Header Section */}
      <HeaderNavigator
        title={translations.items}
        description={translations.itemsDescription}
      />

      {/* Form Inputs */}
      <StyledInput
        label={translations.name}
        placeholder={translations.enterItemName}
        onChange={handleChange("name")}
        value={itemInfo.name}
      />
      <StyledInput
        label={translations.price}
        placeholder={translations.enterItemPrice}
        onChange={handleChange("price")}
        value={itemInfo.price}
        type="number"
      />
      <StyledInput
        label={translations.quantity}
        placeholder={translations.enterItemQuantity}
        onChange={handleChange("quantity")}
        value={itemInfo.quantity}
        type="number"
      />
      <StyledInput
        label={translations.barCode}
        placeholder={translations.enterItemBarCode}
        onChange={handleChange("barcode")}
        value={itemInfo.barcode}
        type="text"
      />
      <StyledInput
        label={translations.description}
        placeholder={translations.enterItemDescription}
        onChange={handleChange("description")}
        value={itemInfo.description}
        isTextArea
      />
      <StyledButton
        title={editingItemId ? translations.updateItem : translations.addItem}
        onClick={handleSave}
      />

      {/* Barcode Reader */}
      <div id="barcode-reader">
        <StyledButton
          title={translations.scanBarCode}
          onClick={initializeBarcodeReader}
        />
      </div>
      
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
              price={item.price}
              quantity={item.quantity}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onClick={() => togglePopup(item)}
            />
          ))
        ) : (
          <p>{translations.noItemFound}</p>
        )}
      </ItemsContainer>
      {isPopupOpen && selectedItem && (
  <Popup
    content={
<ItemInfo item={selectedItem} SetlefWdour={SetlefWdour} togglePopup={togglePopup}/>
    }
    onClose={togglePopup}
  />
      )}
    </FormContainer>
  );
};

export default Items;
