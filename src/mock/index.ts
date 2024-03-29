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
          'companyMsg|2-3': [ //
            {
              name: '@cname',
              job: '@cname',
              ctime: '@datetime',
              'discription|2-3': ['@csentence']
            }
          ],
          'skills|6-8': ['@ctitle'], // 技能
          'experiences|4-6': [{ // 项目经验
            name: '@ctitle', // 名称
            // job: '@cname',
            ctime: '@datetime', // 起止时间
            discription: '@cparagraph', // 项目描述
            'mainSkill|4-7': ['@ctitle'],
            'mainJobs|2-3': [
              {
                name: '@ctitle',
                'descrip|2-3': ['@csentence']
              }
            ]
          }],
          'extra': '@csentence'
        }),
      }
    },
  },
] as MockMethod[]