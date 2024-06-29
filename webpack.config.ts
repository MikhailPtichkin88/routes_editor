import path from 'path'
import webpack from 'webpack'
import { buildWebpack } from './config/build/buildWebpack'
import { BuildMode, BuildPaths } from './config/build/types/types'

interface EnvVariables {
  mode: BuildMode
  port: number
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    apiUrl: 'http://localhost:8002',
    paths,
  })

  return config
}
