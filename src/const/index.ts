export const optionConfig = {
  menuBtn: false,
  // detail: true,
  disabled: false,
  gutter: 6,
  span: 12,
  title: {
    style: {
      color: '',
      fontWeight: 'bold'
    }
  },
  components: 'resume01',
  column: [
    {
      label: '个人基本信息',
      blockType: 'base',
      disabled: false,
      gutter: 6,
      column: [
        {
          label: '姓名',
          prop: 'name',
          gutter: 6,
          rules: [
            {
              required: true,
              trigger: 'blur',
              message: '请输入姓名'
            }
          ]
        },
        {
          label: '意向岗位',
          prop: 'like',
          rules: [
            {
              required: true,
              trigger: 'blur',
              message: '请输入意向岗位'
            }
          ]
        },
        {
          label: '工作年限',
          prop: 'workTime',
          type: 'number',
          append: '年',
          rules: [
            {
              required: true,
              trigger: 'blur',
              message: '请输入工作年限'
            }
          ]
        },
        {
          label: '年龄',
          prop: 'like'
        },
        {
          label: '意向城市',
          prop: 'city'
        },
        {
          label: '电话号码',
          prop: 'phone',
          rules: [
            {
              required: true,
              trigger: 'blur',
              message: '请输入电话号码'
            }
          ]
        },
        {
          label: '微信',
          prop: 'wechat'
        },
        {
          label: '头像',
          prop: 'url',
          type: 'upload',
          listType: 'picture-img',
        },
      ],
      prop: 'baseMsg',
    },
    {
      label: '工作经验',
      prop: 'companyMsg',
      blockType: 'job',
      type: 'dynamic',
      disabled: false,
      gutter: 6,
      column: [{ // name不展示
        label: '公司名称',
        prop: 'label',
        gutter: 6,
        tip: 'row'
      }, {
        label: '职位名称',
        prop: 'job',
        tip: 'row'
      }, {
        label: '起始时间',
        prop: 'ctime',
        type: 'daterange',
        tip: 'row'
      }, {
        label: '主要功能',
        prop: 'discription',
        span: 24,
        type: 'textarea',
        tip: 'discription'
      }
      ]
    },
    {
      label: '专业技能',
      prop: 'skills',
      blockType: 'skill'
    },
    {
      label: '项目经验',
      prop: 'experiences',
      blockType: 'project',
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
      blockType: 'self',
      prop: 'extra',
      type: 'textarea'
    }
  ]
}

export const options = {
  labelWidth: 0,
  span: 24,
  emptyBtn: false,
  column: [
    {
      value: '个人基本信息',
      prop: 'base',
      type: 'title',
    },
    {
      label: '基本信息',
      prop: 'baseMsg',
      // slot: true
    },
    {
      value: '工作经验',
      prop: 'work',
      type: 'title'
    },
    {
      prop: 'companyMsg',
      type: 'dynamic',
      span: 24,
      children: {
        index: false,
        align: 'center',
        type: 'form',
        headerAlign: 'center',
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
          type: 'daterange',
          tip: 'row'
        }, {
          label: '主要功能',
          prop: 'discription',
          span: 24,
          type: 'textarea',
          tip: 'discription'
        }
        ]
      }
    },
    {
      value: '专业技能',
      prop: 'skill',
      type: 'title'
    },
    {
      prop: 'skills',
      type: 'array'
    },
    {
      value: '项目经验',
      prop: 'experience',
      type: 'title'
    },
    {
      prop: 'experiences',
      type: 'dynamic',
      span: 24,
      gutter: 6,
      children: {
        index: false,
        align: 'center',
        type: 'form',
        headerAlign: 'center',
        rowAdd: (done) => {
          console.log('新增回调')
          done({
            input: '默认值'
          });
        },
        rowDel: (row, done) => {
          console.log('删除回调' + JSON.stringify(row))
          done();
        },
        column: [
          {
            label: '项目名称',
            prop: 'name',
            gutter: 6,
            tip: 'rows'
          }, {
            label: '起始时间',
            type: 'date',
            prop: 'ctime',
            gutter: 6,
            tip: 'rows'
          }, {
            label: '项目描述',
            type: 'textarea',
            prop: 'discription',
            gutter: 6,
            tip: 'discription'
          }, {
            label: '主要技术',
            prop: 'mainSkill',
            tip: 'mainSkill'
          }, {
            label: '主要工作',
            prop: 'mainJobs',
            span: 24,
            type: 'dynamic',
            children: {
              column: [
                {
                  label: '主要工作',
                  prop: 'name'
                },
                {
                  label: '描述',
                  prop: 'descrip',
                  type: 'array'
                }
              ]
            }
            // type: 'array' // slot? dynamic？
          },{
            label: '重难点',
            prop: 'mains',
            span: 24,
            type: 'array' // slot? dynamic？
          }
        ],
      }
    },
    {
      value: '自我评价',
      prop: 'self',
      type: 'title'
    },
    {
      label: '',
      prop: 'extra',
      type: 'textarea'
    },
  ],
}

//
export const baseOptions = {
  menuBtn: false,
  span: 8,
  column: [
    {
      label: '姓名',
      prop: 'name',
      rules: [
        {
          required: true,
          trigger: 'blur',
          message: '请输入姓名'
        }
      ]
    },
    {
      label: '意向岗位',
      prop: 'like',
      rules: [
        {
          required: true,
          trigger: 'blur',
          message: '请输入意向岗位'
        }
      ]
    },
    {
      label: '工作年限',
      prop: 'workTime',
      type: 'number',
      append: '年',
      rules: [
        {
          required: true,
          trigger: 'blur',
          message: '请输入工作年限'
        }
      ]
    },
    {
      label: '年龄',
      prop: 'like'
    },
    {
      label: '意向城市',
      prop: 'city'
    },
    {
      label: '电话号码',
      prop: 'phone',
      rules: [
        {
          required: true,
          trigger: 'blur',
          message: '请输入电话号码'
        }
      ]
    },
    {
      label: '微信',
      prop: 'wechat'
    },
    {
      label: '头像',
      prop: 'url',
      type: 'upload',
      listType: 'picture-img',
    },
  ],
}

export const workOptions = {
  menuBtn: false,
  span: 8,
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
    type: 'daterange',
    tip: 'row'
  }, {
    label: '主要功能',
    prop: 'discription',
    span: 24,
    type: 'textarea',
    tip: 'discription'
  }
  ]
}

export const experiencesOptions = {}