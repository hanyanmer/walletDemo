import { Button, Space } from 'antd';

import { useEffect } from 'react';
import { Outlet, connect} from '@umijs/max';
import Auth from '@/components/Auth';
import { ProLayout } from '@ant-design/pro-components';
import { WagmiProvider} from 'wagmi'
import { config } from '@/utils/wagmi/config';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'




const Layout=(props:any)=> {
  const { auth, dispatch,children} = props
  console.log('children',children)
  console.log('props',auth)

  useEffect(()=>{
    dispatch({
      type:'auth/queryAuth',
      payload:{}
    })
  },[])
  const queryClient = new QueryClient()

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
      <ProLayout
      title="WalletDemo"
      headerRender={()=>{
        return <div>helo</div>
        }}

      >
      <div style={{backgroundColor:'white',height:'100vh'}}>
        {/* <div style={{
          margin:'20px',
          display:'flex',
          justifyContent:'right',
          }}>
        <Space>
          use webjs connect metamask:
          <Button onClick={() => {
            dispatch({type:'auth/updateAuthOpen', payload:{isAuthOpen:true}})
            }
          }>
            Login
          </Button>
          <Button>Log out</Button>
        </Space>
        <Auth/>
        {auth?.isAuthOpen&&<Auth/>}
      </div> */}
      {/* <div style={{
         margin:'20px',
         display:'flex',
         justifyContent:'right',
      }}>
        <Space>
          use wagmi connect metamask:
          <Button>login</Button>
          <Button>log out</Button>
        </Space>
      </div> */}
      <Outlet/>
    </div>
    </ProLayout>
      </QueryClientProvider>
    </WagmiProvider>

  );
}

export default connect(({auth}:any)=>({auth}))(Layout)