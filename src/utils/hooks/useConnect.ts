import { useCallback} from "react";
import {Metamask} from '@/libs/Metamask'


export const VoucherEhtereum = new Metamask()




// 连接钱包
export function useConnect(){
  const connect = useCallback(async ()=>{
    const walletInfo = await VoucherEhtereum.connect()
    return walletInfo
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