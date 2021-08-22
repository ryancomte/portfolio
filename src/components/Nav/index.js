import React from 'react';

const Nav = ({ navItems, navSelected, setNavSelected }) => {
  return (
    <header>
      <div>
        <h2>Ryan Comte</h2>
        <nav>
          <ul>
            {navItems.map((item, index) => (
              <li key={`${item}-page`}>
                <a
                  className={navSelected === index && 'navActive'}
                  href={`#${item}`}
                  onClick={() => setNavSelected(index)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
