import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: flex;
  padding: 1em;
  gap: 1em;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: white;
  border: 1px solid #e3f2fd;
  border-radius: 0.4em;
  margin: 1em 0;
  
  &:hover {
    background: #a1887f;
  }
  
`;

export default StyledLink;
