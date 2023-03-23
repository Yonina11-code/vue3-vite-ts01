export const optionConfig = {
  title: {
    style: {
      color: '',
      fontWeight: 'bold'
    }
  },
  components: 'resume01',
  columns: [
    {
      name: '个人基本信息',
      type: 'base',
      prop: 'baseMsg',
    },
    {
      name: '工作经验',
      prop: 'companyMsg',
      type: 'job',
      items: {
        rows: [{ // name不展示
          name: '公司名称',
          prop: 'name'
        }, {
          name: '职位名称',
          prop: 'job'
        }, {
          name: '起始时间',
          prop: 'ctime'
        }],
        des: {
          name: '主要功能',
          prop: 'discription'
        }
      }
    },
    {
      name: '专业技能',
      prop: 'skills',
      type: 'skill'
    },
    {
      name: '项目经验',
      prop: 'experiences',
      type: 'project',
      items: {
        rows: [
          {
            name: '项目名称',
            prop: 'name'
          },
          {
            name: '起始时间',
            prop: 'ctime'
          }
        ],
        discription: {
          name: '项目描述',
          prop: 'discription'
        },
        mainSkill: {
          name: '主要技术',
          prop: 'mainSkill'
        },
        mainJobs: {
          name: '主要工作',
          prop: 'mainJob',
          column: {
            title: '主要工作分支',
            name: 'name',
            prop: 'descrip'
          }
        }
      }

    },
    {
      name: '自我评价',
      type: 'self',
      prop: 'extra'
    }
  ]
}