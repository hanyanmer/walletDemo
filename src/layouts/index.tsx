import { Button, Space } from 'antd';

import { useEffect } from 'react';
import { Outlet, connect} from '@umijs/max';
import Auth from '@/components/Auth';
import { ProLayout } from '@ant-design/pro-components';


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


  return (
    <ProLayout
      title="WalletDemo"
      headerRender={()=>{
        return <div>helo</div>
        }}

      >
      <div style={{backgroundColor:'white',height:'100vh'}}>
        <div style={{
          margin:'20px',
          display:'flex',
          justifyContent:'right'
          }}>
        <Space>
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
      </div>
      <Outlet/>
    </div>
    </ProLayout>
  );
}

export default connect(({auth}:any)=>({auth}))(Layout)