import React from "react";
import Image from "next/image";
import rafiki from '../../asset/images/rafiki.png';
import amico from '../../asset/images/wine-amico.png';
import wineBro from '../../asset/images/wine-bro.png';
import cuate from '../../asset/images/wine-cuate.png'

import { featuresData } from "../data/featuresData";


const Features : React.FC  = () => {
    const subtitle2="Le Chardonnay s’y épanouit particulièrement sur les hauts de coteaux et entre dans la vinification de nos crémants."
    const {list,title,subtitle} = featuresData;

    return (
      <section className="my-[70px] xl:my-[150px]">
        <div className="container mx-auto">
          {/* texte */}
          <div className="text-center">
            <h2 className="text-3xl mb-6 xl:mb-12">{title}</h2>
            <p className="lead max-w-[585px] mx-auto mb-16 xl:mb-24">
              {subtitle}
            </p>
          </div>

          {/* Features list  */}
          <div className="grid grid-cols-1 gap-[50px] xl:grid-cols-2 ">
            {list.map((item: any) => (
              <div
                className="w-full max-w-[530px] h-[360px] relative flex flex-col items-center justify-center xl:flex-row border-yellow-300 border-2 rounded-md"
                data-aos="fade-up"
                data-aos-offset={item.delay}
              >
                {/* <div>bg image</div> */}
                <div className="max-w-[120px] xl:mr-7 xl:max-w-[230px]">
                  <Image src={item.image} alt="" width={500} />
                </div>
                <div className="max-w-[220px]">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default Features;