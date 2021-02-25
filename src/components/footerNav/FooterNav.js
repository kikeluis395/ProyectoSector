import React from 'react';

function FooterNav({footerNav}) {
  const {item} = footerNav
  return (
    
    <div>
      <a href="a">
        <li>{item}</li>
      </a>
    </div>
  );
}

export default FooterNav;