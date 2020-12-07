import React from 'react'
import { SideBar } from './SideBar'
import { testInput, userRoles } from './config'

const App = () => {
  return (
    <SideBar user={{ currentUser: 'userB', userRoles }} input={testInput} />
  )
}

export default App
