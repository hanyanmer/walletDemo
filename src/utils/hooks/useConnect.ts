import { useCallback} from "react";
import {Metamask} from '@/libs/Metamask'


export const VoucherEhtereum = new Metamask()




// 连接钱包
export function useConnect(){
  // 用一个登录状态来更新connect的对象
  const connect = useCallback(async ()=>{
    const connectMatamask =  new Metamask()
    connectMatamask.connect()
    return {
      connectService:connectMatamask,
      walletInfo:connectMatamask?.getWalletInfo()
    }
  },[])

  const disconnect = useCallback(()=>{

  },[])
  const reconnect = useCallback(()=>{

  },[])
  return {
    connect,
    disconnect,
    reconnect
  }

}