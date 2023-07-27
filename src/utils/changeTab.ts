export const changeTab = (value: string) => {
  let tab = ''
  switch (value) {
    case 'all':
      tab = '全部'
      break;
    case 'ask':
      tab = '问答'
      break;
    case 'share':
      tab = '分享'
      break;
    case 'job':
      tab = '招聘'
      break;
    case 'good':
      tab = '精华'
      break;
    case 'dev':
      tab = '客户端测试'
      break;
    default:
      tab = '其他'
      break;
  }
  return tab
}