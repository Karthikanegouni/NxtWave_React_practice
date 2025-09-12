import { useState } from "react"
import ConfigurationController from "./components/ConfigurationController"
import Layout from "./components/Layout"
import LayoutContext from "./context/ConfigurationContext"
import "./App.css"

const App = () => {
  const [showContent, setShowContent] = useState(true)
  const [showLeftNavbar, setShowLeftNavbar] = useState(true)
  const [showRightNavbar, setShowRightNavbar] = useState(true)

  const onToggleShowContent = () => setShowContent((prev) => !prev)
  const onToggleShowLeftNavbar = () => setShowLeftNavbar((prev) => !prev)
  const onToggleShowRightNavbar = () => setShowRightNavbar((prev) => !prev)
  return (
    <LayoutContext.Provider
      value={{
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      }}
    >
      <div>
        <ConfigurationController />
        <Layout />
      </div>
    </LayoutContext.Provider>
  )
}

export default App
