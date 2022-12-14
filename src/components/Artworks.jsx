import { useEffect, useState } from 'react'
import { setGlobalState, useGlobalState } from '../store'
import { Link } from 'react-router-dom';

const Artworks = () => {
  const [nfts] = useGlobalState('nfts')
  const [end, setEnd] = useState(4)
  const [count] = useState(4)
  const [collection, setCollection] = useState([])

  const getCollection = () => {
    return nfts.slice(0, end)
  }

  useEffect(() => {
    setCollection(getCollection())
  }, [nfts, end])

  return (
    <div className="bg-[#fff] gradient-bg-artworks mt-5">
      <div className="w-4/5 artwork-wrap mx-auto">
        <h4 className="text-black text-3xl font-bold uppercase text-black mb-5">
          {collection.length > 0 ? 'Featured NFTs' : 'No Artworks Yet'}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5 ">
          {collection.map((nft, i) => (
            <Card key={i} nft={nft} />
          ))}
        </div>

        {collection.length > 0 && nfts.length > collection.length ? (
          <div className="text-center my-5">
            <button
              className="shadow-sm text-white
            bg-[#8359ff] hover:bg-[]
            rounded-full cursor-pointer p-5"
              onClick={() => setEnd(end + count)}
            >
              Load More
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

const Card = ({ nft }) => {
  const setNFT = () => {
    setGlobalState('nft', nft)
    setGlobalState('showModal', 'scale-100')
  }

  return (
    <div className="w-full rounded-md overflow-hidden  bg-[#f5f5f5] my-2 p-8">
      <img
        src={nft.metadataURI}
        alt={nft.title}
        className="h-60 w-full object-cover rounded-lg mb-3"
      />
      <h4 className="text-black font-semibold">{nft.title}</h4>
      {/* <p className="text-gray-400 text-xs my-1">{nft.description}</p> */}
      <div className="flex justify-between items-center mt-3 text-black">
        <div className="flex flex-col">
          <small className="text-xs">Current Price</small>
          <p className="text-sm font-semibold">{nft.cost} ETH</p>
        </div>
        <Link to='/Art'   onClick={setNFT} className="mx-4 cursor-pointer">
        <button
          className="shadow-sm shadow-black text-white text-sm bg-[#8359ff]
            hover:bg-[#7862ba] cursor-pointer rounded-full px-3 py-3"
         
        >
          View Details
        </button>
        </Link> 
    
        {/* <Link to='/Profile' className="mx-4 cursor-pointer">
       Profile
      </Link>  */}
      </div>
    </div>
  )
}

export default Artworks
