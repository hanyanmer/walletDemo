
import { ethers } from "ethers";
// import {
//   VoucherClient,
//   VoucherClientProvider
// } from '@white-matrix/matrix-world-voucher-sdk';
import { message } from "antd";

export enum ChainEnv {
  MAINNET = 'mainnet',
  TESTNET = 'testnet'
}

export interface ChainType{
  ETHEREUM:'ethereum'
}
export enum EChainType{
  ETHEREUM='ethereum'
}
export enum IWalletType {
  METAMASK = 'Metamask',
}
export interface WalletInfo {
  address: string;
  balance?: string;
  chainType: ChainType;
  networkName?: string;
  walletName?: IWalletType;
}


export class Metamask {
  private network :string
  private config:Record<string,any>
  private provider:any
  // vocher?:VoucherClient
  signature:any
  public walletInfo:Record<string,any>


  constructor(){
    this.network = 'mainnet'
    this.config = {}
    this.provider =null
    this.walletInfo = {}
    this.init()
  }

  init(){
    // 初始化chain环境
    console.log('REACT_APP_ENV',process.env.REACT_APP_ENV)
    const curEnv = process.env.REACT_APP_ENV === 'PROD'
    ? ChainEnv.MAINNET
    : ChainEnv.TESTNET;
    this.network=curEnv === ChainEnv.MAINNET ? 'mainnet' : 'goerli';

    // 初始化配置
    // this.config = getContractAddress()[this.network];
    // console.log('config',this.config)

    // 初始化provider
    // this.initProvider()

  }

  // 外部调用
  async connect(){
    this.createProvider()
    await this.openMetamask()
    await this.createSigner()
    // this.provider.on('disconnect', () => {
    //   window.location.reload();
    // });
    // this.createVoucher()
    this.getWalletInfo()
  }
  async createProvider(){
    if(window?.ethereum&&window?.ethereum.isMetaMask){
      this.provider = new ethers.providers.Web3Provider(window?.ethereum)
    }else{
      message.warning('请安装metamask浏览器插件')
    }
  }
  async openMetamask(){
    if(this.provider){
      if(this.provider){
        try {
          await this.provider.send('eth_requestAccounts',[])
        } catch (error) {
          message.error(JSON.stringify(error))
        }
      }
    }
  }
  async createSigner(){
    if(this.provider){
      // const signer = ethers.Wallet.createRandom();
      const signature =await this.provider.getSigner().signMessage('helo');
      if(!signature) throw new Error('signature is empty')
      this.signature = signature
    }
  }
  async getWalletInfo(){
    const network = await this.provider.getNetwork();
    const address = await this.provider.getSigner().getAddress();
    const balance = await this.provider.getBalance(address);
    this.walletInfo = {
      address,
      balance: balance.toString(),
      networkName: network.name,
      chainType: EChainType.ETHEREUM,
      walletName: IWalletType.METAMASK
    };
  }

  // createVoucher(){
  //   this.vocher = VoucherClientProvider(false);
  //   this.vocher.connectProvider(
  //     this.config.voucher.proxyAddress,
  //     this.provider
  //   )
  //   this.signer = this.provider.getSigner();
  //   this.vocher.connectSigner(this.signer);
  //   this.vocher.setWaitConfirmations(1);
  // }

  unconnect(){
    // window.location?.reload()
    // if(this.vocher){
    //   // this.vocher?.unConnect()

    // }
  }




}