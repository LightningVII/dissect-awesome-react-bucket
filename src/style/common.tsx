import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const LinkStyle = styled(NavLink)`
  display: block;
  text-decoration: none;
`;

const Link = (props: any) => (
  <LinkStyle {...props} >
    {props.children}
  </LinkStyle>
)

export {
  Link
}
