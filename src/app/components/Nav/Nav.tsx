import React from 'react';
import {navigationData} from '../data/navigationData'

const Nav: React.FC = () => {
    return (
      <nav>
        <ul className='flex gap-x-5'>
          {navigationData.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
}

export default Nav;