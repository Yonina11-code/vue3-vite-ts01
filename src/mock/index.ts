import type { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'
export default [
  {
    url: '/api/info',
    method: 'post',
    response: () => {
      return {
        code: 200,
        data: Mock.mock({
          baseMsg: {
            name: '@cname',
            like: '@cword',
            workTime: '@integer(1,2)',
            age: '@integer(10-100)',
            uid: '@id',
            url: '@image',
            city: '@city',
            country: '@county(true)',
            province: '@province',
            phone: '@integer(11)',
            wechat: '@email',
            region: '@region'
          },
          'companyMsg|2-3': [
            {
              name: '@cname',
              ctime: '@datetime-@datetime',
            }
          ]
        }),
      }
    },
  },
] as MockMethod[]