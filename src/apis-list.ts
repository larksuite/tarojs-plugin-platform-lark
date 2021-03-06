export const noPromiseApis = new Set([
  'getNFCAdapter',
  'onWindowResize',
  'offWindowResize',
  'getCustomizedInput',
]);

export const needPromiseApis = new Set([
  'startDeviceCredential',
  'mailto',
  'startPasswordVerify',
  'checkWatermark',
  'openSchema',
  'docsPicker',
  'filePicker',
  'showPrompt',
  'getBlockActionSourceDetail',
  'getWifiStatus',
  'getChatInfo',
  'onChatBadgeChange',
  'offChatBadgeChange',
  'getHostLaunchQuery',
  'setBLEMTU',
  'connectBLEDevice',
  'disconnectBLEDevice',
  'chooseChat',
  'sendMessageCard',
  'share',
  'toggleChat',
  'chooseContact',
  'enterProfile',
  'enterChat',
  'enterBot',
  'exitMiniProgram',
  'startFaceVerify',
]);
