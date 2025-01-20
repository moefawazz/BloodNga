import styled from "styled-components";

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Create 3 equal columns */
  gap: 16px; /* Space between the divs */

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr); /* Create 3 equal columns */
  }
`