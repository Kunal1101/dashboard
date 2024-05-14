import React from 'react'
import BlockchaiNodeCard from './BlockchaiNodeCard'
import MainComponentHeader from './MainComponentHeader'

const BlockChain = () => {
  return (
    <div className='componentMainScreen'>
    <div className="mb-5">
        <MainComponentHeader headerTitle="Blockchain Node" />
    </div>
    <div className='d-flex mt-lg-4 blockChainNodeContainer gap-4 flex-wrap'>
      <BlockchaiNodeCard />
      <BlockchaiNodeCard />
      <BlockchaiNodeCard />
      <BlockchaiNodeCard />
      <BlockchaiNodeCard />
      <BlockchaiNodeCard />
    </div>
 </div>
  )
}

export default BlockChain