"use client"
import { MDXProvider } from '@mdx-js/react'
import Image from 'next/image'
import React from 'react'

const components = {
  img: (props: any) => <img {...props} className="max-w-full rounded" />,
  Image,
  a: (props: any) => <a {...props} className="text-rose-600 hover:underline" />
}

export default function ContentRenderer({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
