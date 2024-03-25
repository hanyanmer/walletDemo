import { ModalForm } from '@ant-design/pro-components';
import { Button, Form, Space, Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import { useEffect, useState } from 'react';
import api from '@/services/demo/index'
import { connect } from '@umijs/max';



enum Logintype {
  LOGIN_EMAIL = 'Email',
  LOGIN_WALLET = 'Wallet',
}



const Layout=(props:any)=> {
  const {auth,dispatch} = props
  console.log('props',auth)


  useEffect(()=>{
    dispatch({
      type:'auth/queryAuth',
      payload:{}
    })
  },[])



  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [loginType, setLoginType] = useState(Logintype.LOGIN_EMAIL);


  const onSubmit = async()=>{
    dispatch({
      type:'auth/updateAuth',
      payload:{}
    })
    setOpen(false)
  }

  return (
    <div>
      <Space>
        <Button onClick={() => setOpen(true)}>Login</Button>
        <Button>Log out</Button>
      </Space>
      <ModalForm
        title="Login"
        open={open}
        onOpenChange={setOpen}
        form={form}
        onFinish={onSubmit}
      >
        <Tabs
          centered={true}
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as Logintype)}
        >
          <TabPane tab={'Email'} key={Logintype.LOGIN_EMAIL}>
            xxx
          </TabPane>
          <TabPane tab={'Wallet'} key={Logintype.LOGIN_WALLET}>
            Wallet
          </TabPane>
        </Tabs>
      </ModalForm>
    </div>
  );
}

export default connect(({auth}:any)=>({auth}))(Layout)