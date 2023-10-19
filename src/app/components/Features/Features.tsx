import React from "react";
import Image from "next/image";
import rafiki from '../../asset/images/rafiki.png';
import amico from '../../asset/images/wine-amico.png';
import wineBro from '../../asset/images/wine-bro.png';
import cuate from '../../asset/images/wine-cuate.png'


const Features : React.FC  = () => {
    const title: string = 'Nos Terroirs'
    const subtitle="Composé de différentes parcelles couvrant 7.86ha, il offre une véritable mosaïque de sols : Des calcaires du Bajocien, des marnes grises du Lias, des sédiments limoneux et des marnes irisées du Keuper ! Le Chardonnay s’y épanouit particulièrement sur les hauts de coteaux et entre dans la vinification de nos crémants."
    const subtitle2="Le Chardonnay s’y épanouit particulièrement sur les hauts de coteaux et entre dans la vinification de nos crémants."
    
    return (
      <section className="my-[70px] xl:my-[150px]">
        <div className="container mx-auto">
          
          {/* texte */}
          <div className="text-center">
            <h2 className="text-3xl mb-6 xl:mb-12">{title}</h2>
            <p className="lead max-w-[585px] mx-auto mb-16 xl:mb-24">{subtitle}</p>
          </div>


          {/* Features list  */}
          <div className="grid grid-cols-1 gap-[50px] xl:grid-cols-2 " >
            <div className="w-full max-w-[530px] h-[360px] relative flex flex-col items-center justify-center xl:flex-row border-yellow-300 border-2 rounded-md" data-aos='fade-up' data-aos-offset='350'> 
                {/* <div>bg image</div> */}
                <div className='max-w-[120px] xl:mr-7 xl:max-w-[230px]'>
                    <Image src={rafiki} alt="" width={500} />
                </div>
                <div className="max-w-[220px]">
                    <h3>{title}</h3>
                    <p>{subtitle2}</p>
                </div>
            </div>

            <div className="w-full max-w-[530px] h-[360px] relative flex flex-col items-center justify-center xl:flex-row border-yellow-300 border-2 rounded-md" data-aos='fade-up' data-aos-offset='350'> 
                {/* <div>bg image</div> */}
                <div className='max-w-[120px] xl:mr-7 xl:max-w-[230px]'>
                    <Image src={amico} alt="" width={500} />
                </div>
                <div className="max-w-[220px]">
                    <h3>{title}</h3>
                    <p>{subtitle2}</p>
                </div>
            </div>


            <div className="w-full max-w-[530px] h-[360px] relative flex flex-col items-center justify-center xl:flex-row border-yellow-300 border-2 rounded-md" data-aos='fade-up' data-aos-offset='350'> 
                {/* <div>bg image</div> */}
                <div className='max-w-[120px] xl:mr-7 xl:max-w-[230px]'>
                    <Image src={wineBro} alt="" width={500} />
                </div>
                <div className="max-w-[220px]">
                    <h3>{title}</h3>
                    <p>{subtitle2}</p>
                </div>
            </div>

            <div className="w-full max-w-[530px] h-[360px] relative flex flex-col items-center justify-center xl:flex-row border-yellow-300 border-2 rounded-md" data-aos='fade-up' data-aos-offset='350'> 
                {/* <div>bg image</div> */}
                <div className='max-w-[120px] xl:mr-7 xl:max-w-[230px]'>
                    <Image src={cuate} alt="" width={500} />
                </div>
                <div className="max-w-[220px]">
                    <h3>{title}</h3>
                    <p>{subtitle2}</p>
                </div>
            </div>

            
          </div>




        </div>
      </section>
    );
}

export default Features;