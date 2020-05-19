import { Platform } from 'react-native';
import {
  TESTNET_INFURA_API,
  MAINNET_INFURA_API,

  DEV_EPNS_SERVER,
  PROD_EPNS_SERVER,

  ENDPOINT_AUTHTOKEN,
  ENDPOINT_REGISTER,
} from 'react-native-dotenv';

const IS_PROD_ENV = 0; // 1 is Production, 0 is testnet / development, 1 or socket server doesnt work

export default {
  PROD_ENV: IS_PROD_ENV,
  INFURA_API: IS_PROD_ENV ? MAINNET_INFURA_API : TESTNET_INFURA_API,

  // All Server related endpoints
  EPNS_SERVER: IS_PROD_ENV ? PROD_EPNS_SERVER : DEV_EPNS_SERVER,

  ENDPOINT_AUTHTOKEN: ENDPOINT_AUTHTOKEN,
  ENDPOINT_REGISTER: ENDPOINT_REGISTER,
};