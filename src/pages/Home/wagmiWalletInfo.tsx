
import React from 'react'
import { useAccount,
  useBalance,
   useEnsName,
   useConnect,
   useConnections,
  useDisconnect,
  useEnsAvatar,
  useSendTransaction,
  useWaitForTransactionReceipt,
  type BaseError,
  useReadContract,
  serialize,
  deserialize,
  useSignMessage,
} from 'wagmi'
import {Space} from 'antd'
import {ProForm, ProFormText} from '@ant-design/pro-components'
import { parseEther } from 'viem'
import { sepolia} from 'wagmi/chains'
import { abi } from './abi'




// 处理动态传入钱包id 进行连接
export function WagmiWalletInfo(){
  // 连接
  const {connectors,connect} = useConnect()
  console.log(connectors,connect)
  const connections = useConnections()
  console.log('connections',connections)

  // 连接后的连接信息
  const {address} = useAccount()
  const curbalance= useBalance({
    address:address,
    chainId:sepolia.id
  })
  const {disconnect} = useDisconnect()
  const {data:ensName} = useEnsName({address})
  const {data:ensAvatar} = useEnsAvatar({name:ensName!})

  // 交易
  const {data:hash,error,isPending, sendTransaction} = useSendTransaction()
  const onFinish=async(val:any)=>{
    console.log('val',val)
    // 未生效
    // const serialized = serialize({value:Number(val?.value)})
    // const descrialized = deserialize(serialized)
    // console.log(descrialized,'desc')

    // 协商address的生效
    sendTransaction({to:val.address||'0xC623848bcc9764cF26F7392D5FF1277596C9E75F',value:parseEther('0.1')})
  }

  const {isLoading:isConfirming,isSuccess:isConfirmed} = useWaitForTransactionReceipt({hash})

  // 合约
  const { data: balance } = useReadContract({
    // ...wagmiContractConfig,
    abi,
    functionName: 'totalSupply',
    address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  })
  console.log('balacn',balance)

  const result = useReadContract({
    abi,
    address: '0x6b175474e89094c44da98b954eedeac495271d0f',
    functionName: 'balanceOf',
    args: ['0x6b175474e89094c44da98b954eedeac495271d0f'],
    account: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  })
  console.log('balance balance of ',result)


  const { signMessage} = useSignMessage()





  return <div>
    <h2>连接metamask操作</h2>
    {
      connectors.map(connector=>{
        return <Space >
          <button key={connector.uid} onClick={()=>{
          connect({connector})
        }}>{connector.name}</button>
        </Space>
      })
    }
    <h2>连接的信息</h2>
    {ensAvatar&&<img src={ensAvatar}></img>}
    {address&&<div>{ensName?`${ensName}`:address}</div>}
    {curbalance&&<div>balance:{curbalance?.value}</div>}
    <button onClick={()=>disconnect()}>disconnect</button>
    <h2>发送交易模块</h2>
    <ProForm onFinish={onFinish} loading={isPending}>
      <ProForm.Group>
        <ProFormText label="address" name="addressName"/>
        <ProFormText label="value" name="value"/>
      </ProForm.Group>
    </ProForm>
    {hash&&<div>Transaction hash:{hash}</div>}

    <h2>发送交易后的信息</h2>
    {isConfirming&&<div>waiting for confirmation</div>}
    {isConfirmed&&<div>transcation confirmed</div>}
    {
      error&&<div>{(error as BaseError).shortMessage||error.message}</div>
    }

    <h2>合约</h2>
    <div>Balance: {balance?.toString()}</div>

    <h2>发送签名</h2>
    <button onClick={()=>{
      signMessage({message:'helo world'})
    }}>sign message</button>

  </div>
}