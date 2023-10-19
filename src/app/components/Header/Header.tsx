import React, {useState} from "react";
import vin from '../../asset/images/vin.webp'
import Image from 'next/image'; 
import Nav from "../Nav/Nav";
import NavMobile from "../NavMobile/NavMobile";
import { FiAlignRight } from "react-icons/fi";

const Header = () => {
    const [navMobile, setNavMobile] = useState(false);
    return (
      <header className="mb-12 lg:mb-0 z-20 relative px-4 lg:px-0" data-aos='fade-down' data-aos-duration='1000'>
        <div className="container mx-auto">
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-x-[120px]">
              <div>
                <a href="#">
                  <Image src={vin} alt="" width={50} height={50} />
                </a>
              </div>

              <div className="hidden lg:flex">
                <Nav />
              </div>
            </div>

            <div className={`${
              navMobile ? 'max-h-52' : 'max-h-0' 
              } lg:hidden absolute top-24 bg-accent-tertiary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}>
              <NavMobile />
            </div>

            <div onClick={()=> setNavMobile(!navMobile)} className="lg:hidden text-2xl text-fuchsia-50 cursor-ponter">
              <FiAlignRight />
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;