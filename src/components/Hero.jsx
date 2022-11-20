import Identicon from 'react-identicons'
import { setGlobalState, useGlobalState, truncate } from '../store'
import zyteonbanner from '../assets/team.jpg'

const Hero = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const onCreatedNFT = () => {
    setGlobalState('modal', 'scale-100')
  }

  return (
    <div
      className="flex flex-col md:flex-row w-4/5 justify-between 
      items-center mx-auto py-10"
    >
      <div className="md:w-3/6 w-full">
        <div>
          <h1 className="text-black text-5xl font-bold ">
            Buy and Sell <br /> Digital Arts, <br />
            <span className="text-black ">NFTs</span> Collections
          </h1>
          <p className="text-black font-semibold text-sm mt-3">
            Mint and collect the hottest NFTs around.
          </p>
        </div>

        <div className="flex flex-row mt-5">
          <button
            className="text-white
            bg-[#8359ff] hover:bg-[#7862ba]
            rounded-full cursor-pointer px-6 py-3"
            onClick={onCreatedNFT}
          >
            Create
          </button>
        </div>

        <div className="w-3/4 flex justify-between items-center mt-5">
          <div>
            <p className="text-black font-bold">1231k</p>
            <small className="text-pink">User</small>
          </div>
          <div>
            <p className="text-black font-bold">152k</p>
            <small className="text-black-300">Artwork</small>
          </div>
          <div>
            <p className="text-black font-bold">200k</p>
            <small className="text-black-300">Artist</small>
          </div>
        </div>
      </div>

      <div
        className=" md:w-2/5 w-full 
      mt-10 md:mt-0 rounded-xl overflow-hidden bg-black-800"
      >
        <img
          src={zyteonbanner}
          alt="NFT Art"
          className="h-70 w-full object-cover"
        />
        <div className="flex justify-start items-center p-3">
          <Identicon
            string={connectedAccount ? connectedAccount : 'Connect Your Wallet'}
            size={50}
            className="h-10 w-10 object-contain rounded-full mr-3"
          />
          <div>
            <p className="text-black font-semibold">
              {connectedAccount
                ? truncate(connectedAccount, 4, 4, 11)
                : 'Connect Your Wallet'}
            </p>
            <small className="text-purple-800 font-bold">@you</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
