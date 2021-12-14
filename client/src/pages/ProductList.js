import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import Announcement from "../components/Announcement/Announcement";
import Products from "../components/Products/Products";
import Newsletter from "../components/NewsLetter/Newsletter";
import Footer from "../components/Footer/Footer";
import { mobile } from "../components/Responsive/Responsive";
import { useLocation } from "react-router";

const Container = styled.div``;
const Title = styled.h1``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  margin: 0px 10px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({});
  const [sortByPrice, setSortByPrice] = useState("newest");

  const filterChangeHandler = (event) => {
    const value = event.target.value;
    setFilter({ ...filters, [event.target.name]: value });
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select name="color" onChange={filterChangeHandler}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>blue</Option>
            <Option>green</Option>
            <Option>orange</Option>
            <Option>red</Option>
          </Select>
          <Select name="size" onChange={filterChangeHandler}>
            <Option disabled>Size</Option>
            <Option>X</Option>
            <Option>XS</Option>
            <Option>M</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort By Price : </FilterText>
          <Select onChange={(e) => setSortByPrice(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Low to High</Option>
            <Option value="desc">High to Low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sortByPrice} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
