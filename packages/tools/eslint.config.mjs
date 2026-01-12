import prettier from 'eslint-config-prettier/flat'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { defineConfig } from 'eslint/config'

const eslintConfig = defineConfig([prettier, eslintPluginPrettierRecommended])

export default eslintConfig
