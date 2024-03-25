import { PageContainer } from '@ant-design/pro-components';
import { connect, useModel } from '@umijs/max';
// import styles from './index.less';

const HomePage: React.FC = (props) => {
  console.log(props)
  const {auth} = props
  return (
    <PageContainer ghost>
      连接metamask的信息
      {/* <div className={styles.container}>
       111
      </div> */}
    </PageContainer>
  );
};

export default connect(({auth}:any)=>({auth}))(HomePage)
