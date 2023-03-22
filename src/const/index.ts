export const optionConfig = {
  title: {
    style: {
      color: '',
      fontWeight: 'bold'
    }
  },
  jobs: {
    name: '工作经验',
    props: [{ // name不展示
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
      prop: 'descrioptions'
    }
  },
  skill: {
    name: '专业技能',
    prop: 'skills'
  },
  projects: {
    name: '项目经验',
    props: [
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
      prop: 'skill'
    },
    mainJobs: {
      name: '主要工作',
      prop: 'mainJob'
    },
    mainJob: {
      title: '主要工作分支',
      name: 'name',
      prop: 'descrip'
    }
  }
}