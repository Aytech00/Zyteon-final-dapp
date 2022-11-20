import React from "react";

import { DiJqueryLogo } from "react-icons/di";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

//INTERNAL IMPORT
import Style from "./Footer.module.css";

// import { Discover, HelpCenter } from "../NavBar/He";

const Footer = () => {
  return (
    <div className={Style.footer_main_wrap}>
      <div className={Style.footer}>
      <div className={Style.footer_box}> 
      <div className={Style.footer_text_wrap}>
      <p className={Style.footer_text}>
      
     Create, Sell And Collect Truly Rare Digital Artworks on Zyteon.
          </p>
        </div>       
       

          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
       
      </div>

      <div className={Style.footer_box}>
      

      <ul>
      <h2 className={Style.menu_heading}>About company</h2>
          
          <li className={Style.list_items}>
            <a className={Style.link} href="">Zyteon</a>
          </li>
          <li className={Style.list_items}>
            <a className={Style.link} href="">Privacy policies</a>
          </li>
          <li className={Style.list_items}>
            <a className={Style.link} href="">Terms of service</a>
          </li>
          <li className={Style.list_items}>
            <a className={Style.link} href="">Infomation</a>
          </li>
        </ul>
      </div>

      <div className={Style.footer_box}>

        
     
        <ul>
        <h2 className={Style.menu_heading}>Marketplace</h2>
          <li className={Style.list_items}>
            <a className={Style.link} href="">Collections</a>
          </li>
          <li className={Style.list_items}>
            <a className={Style.link} href="">Featured NFts</a>
          </li>
          <li className={Style.list_items}>
            <a className={Style.link} href="">Listed NFTs</a>
          </li>
          <li className={Style.list_items}>
            <a className={Style.link} href="">Mint NFT</a>
          </li>
        </ul>
      </div>
      <div className={Style.footer_box}>
        
        <ul>
        <h2 className={Style.menu_heading}>Support</h2>
          
          <li className={Style.list_items}>
            <a className={Style.link} href="">Contact</a>
          </li>
          <li className={Style.list_items}>
            <a className={Style.link} href="">Email</a>
          </li>
          <li className={Style.list_items}>
            <a  className={Style.link} href="">FAQs</a>
          </li>
          <li className={Style.list_items}>
            <a className={Style.link} href="">Help</a>
          </li>
        </ul>
      </div>

     
    

      </div>

     

      <hr />

      <div className={Style.footer_copyright_wrap}>
        <p>
        © 2022 Zyteon Nft Marketplace
        </p>
      </div>


  
    
    </div>
  );
};

export default Footer;
