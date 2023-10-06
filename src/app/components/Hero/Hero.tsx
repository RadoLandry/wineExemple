
'use client'
import vin from '../../asset/images/vin.webp'
import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';


const Hero: React.FC = () => {

    return (
<section className='lg:h-[900px] py-12 bg-red-900'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col xl:flex-row items-center h-full md:py-24'>
          <div>
            <h1 className='text-2xl xl:text-5xl mb-6 lg:mb-12' data-aos="fade-down">Histoire du Domaine Rolet</h1>
            <p className='xl:max-w-[380px] lg:mb-12' data-aos="fade-down">Le Domaine Rolet, créé en 1942, par Désiré Rolet constitue l'un des fleurons du vignoble Jurassien. Ses 4 enfants : Pierre, Eliane, Guy et Bernard ont ensuite assuré la relève en se répartissant les rôles au sein du Domaine.</p>
            <button className='text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2' data-aos="fade-up">Voir</button>
          </div>

          {/* image */}
          <div className='xl:absolute xl:right-20'>
            <Image src={vin} alt='vin' width={500} height={700} data-aos="fade-left"/>
          </div>
          {/* image */}
        </div>
      </div>
    </section>
    )
}

export default Hero;