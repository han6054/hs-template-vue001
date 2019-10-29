
let BASE_URL, IMAGE_HOST_NAME, WXWEB_HOST, M_HOST, STATIC_HOST,AGENTWEBURL,DOWN_APP,FACE_VIDEO,OSS_HOST,STORE_URL,MWAP_HOST,APIPROXY,JY_HOST,CHANNEL_HOST,SELFCREDIT_HOST,CarHost
  ,SecondCarListDetail
OSS_HOST='http://anxinqian.oss-cn-hangzhou.aliyuncs.com/'
if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://morder.huashenghaoche.com/hshcmorder'
  IMAGE_HOST_NAME = 'https://smscaptcha.huashenghaoche.com/hshcsmscaptcha/'
  WXWEB_HOST = 'https://wxweb.huashenghaoche.com'
  M_HOST = 'https://m.huashenghaoche.com'
  STORE_URL = 'https://m.huashenghaoche.com/hshcwap'
  STATIC_HOST = 'https://hsstatic.huashenghaoche.com/mwap'
  MWAP_HOST = 'https://m.huashenghaoche.com/mwap'
  AGENTWEBURL = 'https://agentweb.huashenghaoche.com/hshcagentweb'
  DOWN_APP = 'http://download.huashenghaoche.com'
  FACE_VIDEO = 'https://mapi.huashenghaoche.com/hshcmapi'
  APIPROXY = 'https://proxy.huashenghaoche.com/hshcapiproxy'
  JY_HOST = 'https://proxy.huashenghaoche.com/hshcapiproxy'
  CHANNEL_HOST='https://channel.huashenghaoche.com'
  SELFCREDIT_HOST = 'https://selfcredit.huashenghaoche.com/hshcselfcredit'
  CarHost = 'https://channel.huashenghaoche.com/hshcchannel'
  SecondCarListDetail = 'https://m.huashenghaoche.com/mwap/newUsedCar'
} else {
  JY_HOST = 'http://test-proxy.huashenghaoche.com/hshcapiproxy'
  IMAGE_HOST_NAME = 'http://test-smscaptcha.huashenghaoche.com/hshcsmscaptcha/'
  WXWEB_HOST = 'http://wxweb.huashenghaoche.com'
  M_HOST = 'http://test-m.huashenghaoche.com'
  STORE_URL = 'http://test-m.huashenghaoche.com/hshcwap';
  STATIC_HOST = 'http://test-hsstatic.huashenghaoche.com/mwap'
  MWAP_HOST = 'http://test-m.huashenghaoche.com/mwap'
  AGENTWEBURL = 'http://test-agentweb.huashenghaoche.com/hshcagentweb'
  DOWN_APP = 'http://test-download.huashenghaoche.com'
  FACE_VIDEO = 'http://test-mapi.huashenghaoche.com/hshcmapi'
  APIPROXY = 'http://test-proxy.huashenghaoche.com/hshcapiproxy'
  CHANNEL_HOST='http://test-channel.huashenghaoche.com'
  SELFCREDIT_HOST = 'http://test-selfcredit.huashenghaoche.com/hshcselfcredit'
  CarHost = 'http://test-channel.huashenghaoche.com/hshcchannel'
  SecondCarListDetail = 'http://test-m.huashenghaoche.com/mwap/newUsedCar'
  if (process.env.NODE_ENV === 'testing') {
    BASE_URL = 'http://test-morder.huashenghaoche.com/hshcmorder'
  } else {
    BASE_URL = 'http://test-morder.huashenghaoche.com/hshcmorder'
  }
}
export {
  WXWEB_HOST,
  BASE_URL,
  IMAGE_HOST_NAME,
  M_HOST,
  AGENTWEBURL,
  DOWN_APP,
  STATIC_HOST,
  MWAP_HOST,
  STORE_URL,
  FACE_VIDEO,
  OSS_HOST,
  APIPROXY,
  JY_HOST,
  CHANNEL_HOST,
  SELFCREDIT_HOST,
  CarHost,
  SecondCarListDetail
}
