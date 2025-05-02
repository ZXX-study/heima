import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default defineConfig([
  // 忽略某些路径
  globalIgnores(['**/dist/**', '**/coverage/**']),

  // 主要规则配置
  {
    name: 'main-config',
    files: ['**/*.{js,jsx,ts,tsx,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ElMessage: 'readonly',
        ElMessageBox: 'readonly',
        ElLoading: 'readonly'
      }
    },
    plugins: {
      vue: pluginVue
    },
    rules: {
      // Vue 规则
      'vue/multi-word-component-names': ['warn', { ignores: ['index'] }],
      'vue/no-setup-props-destructure': 'off',

      // 格式相关规则禁用（交给 Prettier 管）
      indent: 'off',
      quotes: 'off',
      semi: 'off',
      'comma-dangle': 'off',
      'object-curly-spacing': 'off',
      'space-before-function-paren': 'off',

      // 常规 JS 规则
      'no-undef': 'error'
    }
  },

  // 启用 Vue 推荐规则
  ...pluginVue.configs['flat/essential'],

  // 启用 JavaScript 推荐规则
  js.configs.recommended
])
