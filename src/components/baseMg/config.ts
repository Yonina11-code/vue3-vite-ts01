export const optionsConfig = () => {
  return {
    style: {
      fontSize: '16px',
    },
    column: [
      {
        label: '', // 姓名
        prop: 'name',
        style: {
          fontWeight: 'bold'
        }
      },
      {
        label: 'xxx意向',
        prop: 'like'
      },
      {
        label: '年x',
        prop: 'workTime'
      },
      {
        label: 'dianhua',
        prop: 'phone'
      }
    ]
  }
}