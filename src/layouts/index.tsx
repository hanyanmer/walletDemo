import { Button, Space } from 'antd';

import { useEffect } from 'react';
import api from '@/services/demo/index'
import { connect} from '@umijs/max';
import Auth from '@/components/Auth';







const Layout=(props:any)=> {
  const { auth, dispatch} = props
  console.log('props',auth)

  useEffect(()=>{
    dispatch({
      type:'auth/queryAuth',
      payload:{}
    })
  },[])


  return (
    <div>
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
  );
}

export default connect(({auth}:any)=>({auth}))(Layout)