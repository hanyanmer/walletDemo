import { ModalForm } from "@ant-design/pro-components"
import { Form, Tabs } from "antd"
import TabPane from 'antd/es/tabs/TabPane';
import React, { useEffect, useState } from "react"
import { connect } from "@umijs/max";
import MetaMaskConnect from "./MetaMaskConnect";
import { Metamask } from "@/libs/Metamask";
import bnbIcon from '@/assets/wallet/bnbIcon.svg';
import ethIcon from '@/assets/wallet/ethIcon.svg';
import flowIcon from '@/assets/wallet/flowIcon.svg';


enum Logintype {
  LOGIN_ETHEREUM = 'ethereum',
  LOGIN_FLOW='flow',
  LOGIN_BNB='bnb'
}
const Auth=(props:any)=>{
  const { auth, dispatch} = props
  const [connectService,setConnectService] = useState<Metamask|null>()
  // const [open,setOpen] = useState(false)

  const [form] = Form.useForm();
  const [loginType, setLoginType] = useState(Logintype.LOGIN_ETHEREUM);
  const onSubmit = async()=>{
    // setOpen(false)
  dispatch({
    type:'auth/updateAuth',
    payload:{
        isAuthOpen:true
      }
    })
  }

  useEffect(()=>{
    if(!connectService){
      const connectMatamask =  new Metamask()
      setConnectService(connectMatamask as any)
    }
    return ()=>{
      if(connectService){
        connectService.unconnect()
        setConnectService(null)
      }
    }

  },[auth?.isAuthOpen])
  return (
    <ModalForm
        title="Login"
        open={auth?.isAuthOpen}
        // onOpenChange={setOpen}
        modalProps={{
          onCancel:()=>{
            dispatch({
              type:'auth/updateAuthOpen',
              payload:{
                isAuthOpen:false
              }
            })
          }
        }}
        form={form}
        onFinish={onSubmit}
        submitter={{render:()=>null}}
        style={{
          marginBottom:'50px'
        }}
      >
        <Tabs
          centered={true}
          activeKey={loginType}
          onChange={(activeKey) => {
            console.log('activekey',activeKey)
            setLoginType(activeKey as Logintype)
          }}
        >
          <TabPane tab={'Ethereum'} key={Logintype.LOGIN_ETHEREUM}
             tab={
              <>
                <img
                  style={{ height: '20px', margin: '0 6px 4px 0' }}
                  src={ethIcon}
                  alt="eth icon"
                />
                Ethereum
              </>
            }
          >
            {/* <div onClick={()=>{connectService.connect()}}>hh</div> */}
            <MetaMaskConnect connectService={connectService}/>
          </TabPane>
          <TabPane tab={'Flow'} key={Logintype.LOGIN_FLOW}
            tab={
              <>
                <img
                  style={{ height: '20px', margin: '0 6px 4px 0' }}
                  src={flowIcon}
                  alt="flow icon"
                />
                Flow
              </>
            }
          >
            Flow
          </TabPane>
          <TabPane tab={'BNB Chain'} key={Logintype.LOGIN_BNB}
             tab={
              <>
                <img
                  style={{ height: '20px', margin: '0 6px 4px 0' }}
                  src={bnbIcon}
                  alt="bnb icon"
                />
                BNB Chain
              </>
            }
          >
            BNB Chain
          </TabPane>
        </Tabs>
    </ModalForm>
  )
}

export default connect(({auth}:any)=>({auth}))(Auth)