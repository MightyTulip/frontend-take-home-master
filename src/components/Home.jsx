import React, { useEffect, useState } from 'react';
import 'regenerator-runtime/runtime';
import SearchIcon from '@material-ui/icons/Search';
import {
  Input,
  InputAdornment,
} from '@material-ui/core';
import { styled } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import StyledLink from '../styles/listItem';

const StyledDivInput = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledThumbnail = styled.img`
  width: 4rem;
`;

function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);

  const searchMovies = async () => {
    if (!searchValue) return;
    const resp = await fetch(`http://localhost:3000/api/search?search=${searchValue}&page=${page}`);
    const { Search } = await resp.json();
    setResults([...results, ...(Search || [])]);
  };

  useEffect(() => {
    const searchDebounce = setTimeout(() => { searchMovies(); }, 300);

    return () => clearTimeout(searchDebounce);
  }, [searchValue]);

  useEffect(() => {
    searchMovies();
  }, [page]);

  const updateSearch = (event) => {
    const { value } = event.target;
    if (value !== searchValue) {
      setSearchValue(value);
    }
  };

  const updatePage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <StyledDivInput>
        <Input
          id="standard-basic"
          label="outlined"
          placeholder="Search..."
          onChange={updateSearch}
          value={searchValue}
          startAdornment={(
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
        )}
        />
      </StyledDivInput>

      <InfiniteScroll
        dataLength={results.length}
        next={updatePage}
        endMssage={<span />}
        loader={<div className="loader" />}
        hasMore
      >
        {results.map((result) => (
          <StyledLink
            key={result.imdbID}
            to={`/${result.imdbID}`}
          >
            <StyledThumbnail
              src={result.Poster}
              alt={result.Title}
            />
            <div>
              <div>{result.Title}</div>
              <div>{result.Year}</div>
            </div>
          </StyledLink>
        ))}

      </InfiniteScroll>
    </>
  );
}

export default Home;
