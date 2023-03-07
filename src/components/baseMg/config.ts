export const optionsConfig = () => {
  return {
    style: {
      fontSize: '16px',
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