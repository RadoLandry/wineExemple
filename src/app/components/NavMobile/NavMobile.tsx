import React from 'react';
import {navigationData} from '../data/data'


const NavMobile: React.FC = () => {
    return (
      <ul className='flex flex-col px-6 py-8 gap-y-4'>
        {navigationData.map((item: any, index: number) => (
          <li key={index}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    );
}

export default NavMobile;
