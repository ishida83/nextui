import * as colors from "nextui-temp-styles";

import styled from "styled-components";

var alpha = require('alpha');

const Button = styled.button`
  background: ${({ bgcolor }) => colors.Colors[bgcolor]};
  border: none;
  border-radius: 2px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 40px;
  font-weight: 200;
  margin: 8px 0;
  outline: none;
  padding: 0 12px;
  text-transform: uppercase;
  transition: all 300ms ease-in-out;
  &:hover {
    background: #009EEB;
  }
`;
Button.alpha=alpha;
Button.defaultProps = {
  bgcolor: "orange"
};

export default Button;
