import React from 'react'
import { Outlet } from 'react-router-dom'

const RagPickerDashboard = () => {
  return (
    <div>
        <h1>Rag Picker DashBoard</h1>

        <Outlet />
    </div>
  )
}

export default RagPickerDashboard
