import { ElButton } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'
import 'dayjs/locale/zh-cn'
import { App } from '@vue/runtime-core'

export default (app: App):void => {
  locale.use(lang)

  const components = [
    ElButton
  ]

  components.forEach(component => app.component(component.name, component))

  app.config.globalProperties.$ELEMENT = {
    size: 'medium'
  }
}
