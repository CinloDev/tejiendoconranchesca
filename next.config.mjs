import withMDX from '@next/mdx'

const mdx = withMDX({
  extension: /\.(md|mdx)$/,
  options: {}
})

const nextConfig = {
  experimental: {
    appDir: true
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx']
}

export default mdx(nextConfig)
