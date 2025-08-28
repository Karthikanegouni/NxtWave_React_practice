import { useEffect, useState } from "react"
import { SyncLoader } from "react-spinners"
import VaccinationByAge from "../VaccinationByAge"
import VaccinationByGender from "../VaccinationByGender"
import VaccinationCoverage from "../VaccinationCoverage"

import "./index.css"

const apiStatusConstants = {
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
}

const CowinDashboard = () => {
  const [data, setData] = useState(null)
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.inProgress)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setApiStatus(apiStatusConstants.inProgress)
      const apiUrl = "https://apis.ccbp.in/covid-vaccination-data"
      const response = await fetch(apiUrl)

      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }

      const result = await response.json()
      const formattedData = formatData(result)
      setData(formattedData)
      setApiStatus(apiStatusConstants.success)
    } catch (error) {
      console.error("Error fetching data:", error)
      setApiStatus(apiStatusConstants.failure)
    }
  }

  function formatData(data) {
    const vaccinationByDate = (data.last_7_days_vaccination || []).map(
      (item) => ({
        vaccineDate: item.vaccine_date,
        dose1: item.dose_1,
        dose2: item.dose_2,
      })
    )

    const vaccinationByAge = (data.vaccination_by_age || []).map((item) => ({
      age: item.age,
      count: item.count,
    }))

    const vaccinationByGender = (data.vaccination_by_gender || []).map(
      (item) => ({
        gender: item.gender,
        count: item.count,
      })
    )

    return {
      vaccinationByDate,
      vaccinationByAge,
      vaccinationByGender,
    }
  }

  const renderLoadingView = () => (
    <div data-testid="loader" className="loader">
      <SyncLoader size={40} color="#ffffff" />
    </div>
  )

  const renderSuccessView = () => (
    <>
      <VaccinationCoverage data={data.vaccinationByDate} />
      <VaccinationByGender data={data.vaccinationByGender} />
      <VaccinationByAge data={data.vaccinationByAge} />
    </>
  )

  const renderFailureView = () => (
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  const renderCowinDashboard = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <div className="cowin-dashboard">
      <div className="header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          alt="website logo"
        />
        <p>Co-WIN</p>
      </div>
      <h1>CoWIN Vaccination in India</h1>

      {renderCowinDashboard()}
    </div>
  )
}

export default CowinDashboard
