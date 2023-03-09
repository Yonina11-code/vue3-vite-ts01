export const optionsConfig = () => {
  return {
    style: {
      fontSize: '16px',
      width: '33%',
      height: '40px',
      lineHeight: '40px'
    },
    labelStyle: {
      marginRight: '10px'
    },
    name: {
      label: '姓名', // 姓名
      prop: 'name',
      style: {
        fontWeight: 'bold'
      }
    },
    columns: [
      {
        label: 'xxxlike',
        prop: 'like'
      },
      {
        label: 'yearx',
        prop: 'workTime'
      },
      {
        label: 'dianhua',
        prop: 'phone'
      },
      {
        label: 'wechat',
        prop: 'wechat'
      }
    ]
  }
}