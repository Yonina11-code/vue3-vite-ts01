export const optionConfig = {
  emptyBtn: false,
  detail: true,
  title: {
    style: {
      color: '',
      fontWeight: 'bold'
    }
  },
  components: 'resume01',
  group: [
    {
      label: '个人基本信息',
      type: 'base',
      prop: 'baseMsg',
    },
    {
      label: '工作经验',
      prop: 'companyMsg',
      type: 'job',
      column: [{ // name不展示
          label: '公司名称',
          prop: 'label',
          tip: 'row'
        }, {
          label: '职位名称',
          prop: 'job',
          tip: 'row'
        }, {
          label: '起始时间',
          prop: 'ctime',
          tip: 'row'
        },{
          label: '主要功能',
          prop: 'discription',
          tip: 'discription'
        }
      ]
    },
    {
      label: '专业技能',
      prop: 'skills',
      type: 'skill'
    },
    {
      label: '项目经验',
      prop: 'experiences',
      type: 'project',
      column: [
        {
          label: '项目名称',
          prop: 'name',
          tip: 'rows'
        }, {
          label: '起始时间',
          type: 'date',
          prop: 'ctime',
          tip: 'rows'
        }, {
        label: '项目描述',
        prop: 'discription',
        tip: 'discription'
        }, {
          label: '主要技术',
          prop: 'mainSkill',
          tip: 'mainSkill'
        }, {
          label: '主要工作',
          prop: 'mainJob',
          tip: 'mainJob',
          column: {
            title: '主要工作分支',
            label: 'name',
            prop: 'descrip'
          }
        }
      ]
    },
    {
      label: '自我评价',
      type: 'self',
      prop: 'extra'
    }
  ]
}