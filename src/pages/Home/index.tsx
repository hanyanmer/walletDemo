import { PageContainer,ProDescriptions } from '@ant-design/pro-components';
import { connect, useModel } from '@umijs/max';
import { Button, Input, Space } from 'antd';
// import styles from './index.less';
import store from 'store2';

const HomePage: React.FC = (props) => {
  console.log(props)
  const {auth} = props
  console.log('wallet===',store.get('walletInfo'))
  const walletInfo = store.get('walletInfo')
  return (
    <PageContainer ghost>

     <Space direction='vertical'>
     <ProDescriptions title={'连接metamask的信息'} column={2} bordered >
      <ProDescriptions.Item label="network">
         {walletInfo?.network}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="signature">
         {walletInfo?.signature}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="wallet address">
         {walletInfo?.walletInfo?.address}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="wallet balance">
         {walletInfo?.walletInfo?.balance}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="wallet networkName">
         {walletInfo?.walletInfo?.networkName}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="wallet name">
         {walletInfo?.walletInfo?.walletName}
      </ProDescriptions.Item>

     </ProDescriptions>
     <ProDescriptions title="交易模块" column={1}>
     <ProDescriptions.Item label="发送交易">
     <Space.Compact style={{ width: '100%' }}>
      <Input placeholder="input hash key" />
      <Button type="primary">Submit</Button>
    </Space.Compact>
      </ProDescriptions.Item>
      <ProDescriptions.Item label="find transcation">
         {walletInfo?.walletInfo?.walletName}
      </ProDescriptions.Item>


     </ProDescriptions>
     </Space>
    </PageContainer>
  );
};

export default connect(({auth}:any)=>({auth}))(HomePage)
