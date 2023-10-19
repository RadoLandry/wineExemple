import React from 'react';
import rafiki from '../../asset/images/rafiki.png';
import Image from 'next/image'; 

const About: React.FC = () => {
    const titre = "Les visites gourmandes"
    const paragrahe = "Explorer les caves du Domaine Rolet, c'est en découvrir l'histoire et aller à la rencontre de ses savoir-faire ancestraux. Une immersion unique au sein du cœur battant d'Arbois, car c'est au plus profond de son terroir que naît et vieillit le plus emblématique des vins jaunes du Jura."
    
    return (
      <section className="my-[30px] xl:mt-[100px]" data-aos='fade-up' data-aos-offset='350'>
        <div className="container mx-auto border-yellow-300 border-2 rounded-md">
          <div className='rounded-[50px] main-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left xl:gap-x-[60px] xl:pb-0'>
            <div className='flex-1'>
              <Image src={rafiki} alt="" />
            </div>

            <div className='flex-1 xl:pr-12'>
              <h1 className='text-4xl mb-10 text-red-400'>{titre}</h1>
              <p className='max-w-[474px] mx-auto xl:mx-0'>{paragrahe}</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;