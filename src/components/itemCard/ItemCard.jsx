import React, { useEffect, useRef, useState } from "react";
import { CardContainer, CardHeader, CardBody, CardRow, DropdownMenu } from "./ItemCard.style";
import { useTheme } from "../../contexts/ThemeContext";
import { BoldTypography, LightTypography, MediumTypography, RegularTypography } from "../../elements/typography/Typography";
import { useLang } from "../../contexts/LangContext";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const ItemCard = ({ id, name, price, description, barcode, quantity, total, onEdit, onDelete, onClick }) => {
  const { theme } = useTheme();
  const { translations, language } = useLang();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling to the parent
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <CardContainer theme={theme} onClick={onClick}>
      {/* Card Header */}
      <CardHeader theme={theme}>
        <div>
          
        <BoldTypography text={name} fontSize="18px" />
        {barcode && (
        <RegularTypography text={`${translations.barCode}: ${barcode}`} fontSize="14px" />
      )}
        </div>
        <div onClick={handleToggleDropdown} style={{ position: "relative", cursor: "pointer" }} ref={dropdownRef}>
          <BsThreeDotsVertical />
          {isDropdownOpen && (
            <DropdownMenu theme={theme} language={language}>
              <li onClick={() => onEdit(id)}><FaRegEdit />{translations.edit || "Edit"}</li>
              <li onClick={() => onDelete(id)}><RiDeleteBin6Line />{translations.delete || "Delete"}</li>
            </DropdownMenu>
          )}
        </div>
      </CardHeader>

      {/* Card Body */}
      <CardBody>
        {/* Price */}
        <CardRow>
          <MediumTypography text={`${translations.price}:`} />
          <LightTypography text={`$${price}`} fontSize="14px" />
        </CardRow>
        {/* Quantity */}
        <CardRow>
          <MediumTypography text={`${translations.quantity}:`} />
          <LightTypography text={quantity} fontSize="14px" />
        </CardRow>
        {/* Description */}
        {description && (
          <CardRow>
            <MediumTypography text={`${translations.description}:`} />
            <LightTypography text={description} fontSize="14px" />
          </CardRow>
        )}
        {total && (
          <CardRow>
            <MediumTypography text={`${translations.total}:`} />
            <LightTypography text={`$${total}`} fontSize="14px" />
          </CardRow>
        )}
      </CardBody>
    </CardContainer>
  );
};

export default ItemCard;
