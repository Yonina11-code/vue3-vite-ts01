import request from '@/axios/index'

export class api {

  /**
   * @description: 查询简历列表
   */
  static async GetResumeList() {
    return await request({
      url: "/api/v1/resume/resumes",
      method: 'get',
    })
  }

  /**
 * @description: 保存简历
 */
  static async postSaveResume(data: any) {
    return await request({
      url: "/api/v1/resume/resumes",
      method: 'post',
      data
    })
  }

  /**
* @description: 获取简历详情
*/
  static async getDetail(id: number) {
    return await request({
      url: "/api/v1/resume/resume",
      method: 'get',
      params: id,
    })
  }
  /**
* @description: 登陆
*/
  static async login(data: object) {
    return await request({
      url: "/api/v1/user/login",
      method: 'post',
      data,
    })
  }
  /**
* @description: 获取简历详情
*/
  static async register(data: object) {
    return await request({
      url: "/api/v1/user/register",
      method: 'post',
      data,
    })
  }
}
