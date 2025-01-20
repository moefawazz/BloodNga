import React from 'react'
import { FormContainer, Table, TableContainer, TableData, TableHeader, TableRow } from '../../globalStyles'
import HeaderNavigator from '../../elements/headerNavigator/HeaderNavigator'
import { useLang } from '../../contexts/LangContext'
import { useTheme } from '../../contexts/ThemeContext';

const profitsData = [
  {
    name: 'Laptop',
    barCode: '1234567890',
    quantity: 1,
    pricePerItem: 1200,
    total: 1200 * 1,
    netProfit: 1200 * 0.2, // Assuming a 20% profit margin
  },
  {
    name: 'Smartphone',
    barCode: '9876543210',
    quantity: 3,
    pricePerItem: 450,
    total: 450 * 3,
    netProfit: 450 * 3 * 0.15, // Assuming a 15% profit margin
  },
  {
    name: 'Headphones',
    barCode: '1122334455',
    quantity: 2,
    pricePerItem: 150,
    total: 150 * 2,
    netProfit: 150 * 2 * 0.25, // Assuming a 25% profit margin
  },
  {
    name: 'Monitor',
    barCode: '2233445566',
    quantity: 1,
    pricePerItem: 300,
    total: 300 * 1,
    netProfit: 300 * 0.1, // Assuming a 10% profit margin
  },
  {
    name: 'Keyboard',
    barCode: '3344556677',
    quantity: 5,
    pricePerItem: 50,
    total: 50 * 5,
    netProfit: 50 * 5 * 0.3, // Assuming a 30% profit margin
  },
  {
    name: 'Mouse',
    barCode: '4455667788',
    quantity: 4,
    pricePerItem: 30,
    total: 30 * 4,
    netProfit: 30 * 4 * 0.2, // Assuming a 20% profit margin
  },
  {
    name: 'External Hard Drive',
    barCode: '5566778899',
    quantity: 1,
    pricePerItem: 100,
    total: 100 * 1,
    netProfit: 100 * 0.15, // Assuming a 15% profit margin
  },
  {
    name: 'Webcam',
    barCode: '6677889900',
    quantity: 2,
    pricePerItem: 80,
    total: 80 * 2,
    netProfit: 80 * 2 * 0.25, // Assuming a 25% profit margin
  },
  {
    name: 'USB-C Cable',
    barCode: '7788990011',
    quantity: 10,
    pricePerItem: 15,
    total: 15 * 10,
    netProfit: 15 * 10 * 0.1, // Assuming a 10% profit margin
  },
  {
    name: 'Speakers',
    barCode: '8899001122',
    quantity: 1,
    pricePerItem: 200,
    total: 200 * 1,
    netProfit: 200 * 0.2, // Assuming a 20% profit margin
  },
];


const Profits = () => {
  const { language, translations } = useLang();
  const { theme } = useTheme()

  return (
    <FormContainer language={language}>
      <HeaderNavigator 
        title={translations.profits} 
        description={translations.profitsDescription} 
      />

<TableContainer>
    <Table theme={theme}>
      <thead>
        <TableRow theme={theme}>
          <TableHeader theme={theme}>{translations.name}</TableHeader>
          <TableHeader theme={theme}>{translations.barCode}</TableHeader>
          <TableHeader theme={theme}>{translations.quantity}</TableHeader>
          <TableHeader theme={theme}>{translations.pricePerItem}</TableHeader>
          <TableHeader theme={theme}>{translations.total}</TableHeader>
          <TableHeader theme={theme}>{translations.netProfit}</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {profitsData.map((payment, index) => (
          <TableRow key={index}>
            <TableData theme={theme}>{payment.name}</TableData>
            <TableData theme={theme}>{payment.barCode}</TableData>
            <TableData theme={theme}>{payment.quantity}</TableData>
            <TableData theme={theme}>{payment.pricePerItem}</TableData>
            <TableData theme={theme}>{payment.total}</TableData>
            <TableData theme={theme}>{payment.netProfit}</TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  </TableContainer>
    </FormContainer>
  )
}

export default Profits;
