import React from 'react'

export default function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-block bg-gray-100 text-sm px-2 py-1 rounded">{children}</span>
}
