import styled from 'styled-components';

const StyledRating = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-content: center;
  align-items: center;
  flex: 1 1 0;
  margin: 2em 0;
  
  &:not(:last-child) {
    border-right: 2px solid #e3f2fd;
  }
`;

export default StyledRating;
