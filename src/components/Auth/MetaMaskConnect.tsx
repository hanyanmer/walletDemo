import metamask from '@/assets/wallet/metamask.svg';
import { connect } from '@umijs/max';
import { Spin, message } from 'antd';
import { useEffect, useState } from 'react';
import store from 'store2';

const MetaMaskConnect = (props:any)=>{
  const {auth, dispatch} = props
  const {connectService} = props
  const [connecting,setConnecting] = useState(false)
  const onConnect = async()=>{
    console.log('walletInfo',connectService)
    store.set('walletInfo',connectService,false)

    setConnecting(true)
    await connectService.connect()
    setConnecting(false)
  }
  useEffect(()=>{
    console.log('connectService?.signer',connectService?.signature)
    if(connectService?.signature && auth?.isAuthOpen === false){
      message.success('登录成功')
      dispatch({
        type:'auth/updateAuthOpen',
        payload:{
          isAuthOpen:false
        }
      })
    }

  },[connectService?.signature,auth?.isAuthOpen])
  return (
    <div style={{
      display:'flex',
      justifyContent:'center'
    }}>
      <div style={{
      marginTop:'18px',
      width:'50%',
      display:'flex',
      cursor:'pointer',
      justifyContent:'space-between',
      alignItems:'center',
      borderRadius:"13px",
      border:'1px solid #ddd6d6',
      padding:'10px 20px'
    }}
    onClick={onConnect}
    >
      <img src={metamask} alt='metamask'></img>
      <span>Metamask</span>
      {connecting && <Spin />}
      </div>
    </div>
  )

}
export default connect(({auth}:any)=>({auth}))(MetaMaskConnect)