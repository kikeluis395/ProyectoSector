import React from 'react';

function FooterNav({footerNav}) {
  const {id, item} = footerNav
  return (
    
    <div>
      <a href="">
        <li>{item}</li>
      </a>
    </div>
  );
}

export default FooterNav;