import { http, createConfig, useBlockNumber} from 'wagmi'
import { mainnet, sepolia} from 'wagmi/chains'
import { injected, metaMask ,safe , walletConnect} from 'wagmi/connectors'

// const projectId = '0x055aa0193Af9601580a5b6c2B9F8Da4304618C16'

export const config = createConfig({
  chains:[mainnet, sepolia],
  connectors:[
    injected(),
    // walletConnect({projectId}),
    metaMask(),
    safe()
  ],
  transports:{
    [mainnet.id]:http(),
    [sepolia.id]:http(),
  }
})
// useBlockNumber({chainId:undefined})
// declare module 'wagmi'{
//   interface Register{
//     config:typeof config
//   }
// }