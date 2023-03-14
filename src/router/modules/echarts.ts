import Layout from '@/layout/index.vue'

export default [
  {
    path: 'echarts',
    component: Layout,
    redirect: '/echarts/migration',
    name: 'echarts',
    meta: {
      title: 'Echarts',
      icon: 'trend-charts',
      roles: ['other']
    },
    children: [
      {
        path: '/echarts/migration',
        component: () => import('@/views/echarts/migrationMap/index.vue'),
        name: 'migration',
        meta: {
          title: '迁徙图',
          roles: ['other'],
          icon: 'MenuIcon'
        }
      }
    ]
  }
]