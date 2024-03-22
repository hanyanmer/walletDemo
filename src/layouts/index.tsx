import { ModalForm } from '@ant-design/pro-components';
import { Button, Form, Space, Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import { useState } from 'react';

enum Logintype {
  LOGIN_EMAIL = 'Email',
  LOGIN_WALLET = 'Wallet',
}

export default function Layout() {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [loginType, setLoginType] = useState(Logintype.LOGIN_EMAIL);
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
        onFinish={async () => {
          console.log('success');
        }}
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
