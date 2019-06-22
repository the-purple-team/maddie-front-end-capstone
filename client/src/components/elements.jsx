import * as React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
  color: #111111;
  font-size: 13px;
`;

export const WholeBox = styled.div`
  height: 100%;
  width: 100%;
  border-style: solid;
  border-width: 1px;
  text-align: left;
  border-color: #111111;
  border-radius: 0 0 4px 4px;
`;

export const PriceText = styled.div`
  display: inline-block;
  width: 80%;
  margin: 5;
  text-align: left;
  vertical-align: middle;
  line-height: 30px;
  color: #b12704;
  font-size: 17px;
  font-weight: bold;
`;

export const DeliveryText = styled.div`
  color: #111111;
  font-size: 13px;
  padding: 6px 0px 0px;
`;

export const SoldFulfilledText = styled.div`
  color: #111111;
  font-size: 13px;
  padding: 0px 0px 6px;
`;

export const AllText = styled.div`
  color: #111111;
  font-size: 13px;
`;

export const SelectQuantity = styled.input`
  color: #111111;
  font-size: 13px;
  background: #f8f8f8;
`;

export const StyledHThree = styled.h3`
  margin-bottom: 20px;
  color: #d8315b;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: none;
  outline: none;
  resize: none;
  border: 0;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s;
  border-bottom: 2px solid #5c8ba5;

  &:focus {
    border-bottom: 2px solid #2a79a7;
  }
`;

export const StyledButton = styled.button`
  float: right;
  padding: 8px 12px;
  margin: 50px 0px 0px 0px;
  border: 2px solid #5c8ba5;
  background: #f7f7f7;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #2a79a7;
    border: 2px solid #2a79a7;
  }
`;

export const InfoSection = styled.div`
  float: 'left';
  width: '50%';
  height: '50%';
  border-style: 'solid';
  border-width: '2px';
  text-align: 'center';
`;
