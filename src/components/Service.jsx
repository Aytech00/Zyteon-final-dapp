import React from "react";
import style from "./Service.module.css";
import img1 from "../assets/icon-box1.png";
import img2 from "../assets/icon-box3.png";
import img3 from "../assets/icon-box4.png";

const Service = () => {
  return (
    <div className={style.service_main_wrap}>
      <div className={style.heading_wrap}>
        <h2 className={style.heading_text}>Create And sell your NFTs</h2>
      </div>

      <div className={style.main_wrap}>
        <div className={style.inner_wrap}>
          <div className={style.img_wrap}>
            <img src={img1} className={style.img} alt="" />
          </div>
          <div>
            <h2 className={style.title}> Connect wallet
           </h2>
          </div>

          <div className={style.text}>
            <p>
            Once You've Set Up Your Wallet on Metamask, Connect It by clicking on the connect button.
            </p>
          </div>
        </div>
        <div className={style.inner_wrap}>
          <div className={style.img_wrap}>
            <img src={img2} className={style.img} alt="" />
          </div>
          <h2 className={style.title}> Mint your NFTs
</h2>
          <div className={style.text}>
            <p>
            Upload Your Work (Image, Video, Audio, Or 3D Art), Add A Title And Description, And Customize Your NFTswith Properties, Stats.
            </p>
          </div>
        </div>

        <div className={style.inner_wrap}>
          <div className={style.img_wrap}>
            <img src={img3} className={style.img} alt="" />
          </div>
          <h2 className={style.title}>List Them For Sale
          </h2>

          <div className={style.text}>
            <p>
            Choose Between Auctions, Fixed-Price Listings, And Declining-Price Listings. You Choose How You Want Tosell Your NFTs!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
