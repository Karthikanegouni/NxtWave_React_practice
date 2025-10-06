import { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'
import {
  TravelGuideContainer,
  Heading,
  PackagesListContainer,
  LoaderContainer,
} from './styledComponents'
import PackageItem from '../PackageItem'

const TravelGuide = () => {
  const [packagesList, setPackagesList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getPackages = async () => {
    setIsLoading(true)
    try {
      const travelGuidePackagesApiUrl = 'https://apis.ccbp.in/tg/packages'
      const response = await fetch(travelGuidePackagesApiUrl)
      const { packages } = await response.json()
      const formatedData = packages.map((item) => ({
        id: item.id,
        name: item.name,
        imageUrl: item.image_url,
        description: item.description,
      }))
      setPackagesList(formatedData)
    } catch (e) {
      console.log(e.message)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getPackages()
  }, [])

  return (
    <TravelGuideContainer>
      <Heading>Travel Guide</Heading>
      {isLoading ? (
        <LoaderContainer data-testid="loader">
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        </LoaderContainer>
      ) : (
        <PackagesListContainer>
          {packagesList.map((packageData) => (
            <PackageItem key={packageData.id} packageData={packageData} />
          ))}
        </PackagesListContainer>
      )}
    </TravelGuideContainer>
  )
}

export default TravelGuide
