import { PageContainer,ProDescriptions } from '@ant-design/pro-components';
import { connect, useModel } from '@umijs/max';
import { Button, Input, Space } from 'antd';
import store from 'store2';
import { WebJsWalletInfo } from './webjsWalletInfo';
import { WagmiWalletInfo } from './wagmiWalletInfo';


const HomePage: React.FC = (props) => {
  console.log(props)
  const {auth} = props
  console.log('wallet===',store.get('walletInfo'))
  const walletInfo = store.get('walletInfo')

  return (
      <PageContainer ghost>
      {/* <h2 style={{marginBottom:'20px'}}>1. 使用webjs连接metamask的walletinfo</h2>
      <WebJsWalletInfo walletInfo={walletInfo} /> */}
      <h2 style={{marginBottom:'20px'}}>使用wagmi连接metamask的walletinfo</h2>
      <WagmiWalletInfo/>
    </PageContainer>
  );
};

export default connect(({auth}:any)=>({auth}))(HomePage)
