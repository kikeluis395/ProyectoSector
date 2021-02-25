import React from 'react';

function FooterNav({footerNav}) {
  const {item} = footerNav
  return (
      <a href="a">
        <li>{item}</li>
      </a>
  );
}

export default FooterNav;