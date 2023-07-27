import React from 'react'
import { useMyHook } from '@vijendra.rana/use-sample-hook'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App