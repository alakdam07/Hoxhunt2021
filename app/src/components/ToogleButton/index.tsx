import React from "react";
import styled from "styled-components";

export interface ISwtich {
  onClick: () => void;
  $on?: boolean;
  on?: boolean;
}

const defaultShadow =
  "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)";

const activeShadow =
  "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)";

const Button = styled.button<ISwtich>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  width: 120px;
  padding: 4px;
  border: 1px solid grey;
  border-radius: 40px;
  cursor: pointer;
  outline: none;
  background-color: grey;
  box-shadow: ${({ $on }) => ($on ? activeShadow : defaultShadow)};
  &::before {
    box-sizing: inherit;
    display: inline-flex;
    content: "";
    width: 45px;
    height: 45px;
    border-radius: 50%;
    transform: ${({ $on }) => $on && "translateX(63px)"};
    background-color: ${({ $on }) => ($on ? "white" : "black")};
    transition: all 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
    box-shadow: ${defaultShadow};
  }
`;

const Switch = ({ on, onClick }: ISwtich) => (
  <Button onClick={onClick} $on={on} />
);

export default Switch;
