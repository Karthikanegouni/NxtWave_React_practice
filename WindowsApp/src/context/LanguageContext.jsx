import { createContext } from "react"

const LanguageContext = createContext({
  activeLanguage: "EN",
  changeLanguage: () => {},
})

export default LanguageContext
