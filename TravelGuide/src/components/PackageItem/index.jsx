import {
  Description,
  PackageItemContainer,
  PackageTitle,
  TextContainer,
  Thumbnail,
} from './styledComponents'

const PackageItem = ({ packageData }) => {
  const { name, imageUrl, description } = packageData
  return (
    <PackageItemContainer>
      <Thumbnail src={imageUrl} alt={name} />
      <TextContainer>
        <PackageTitle>{name}</PackageTitle>
        <Description>{description}</Description>
      </TextContainer>
    </PackageItemContainer>
  )
}

export default PackageItem
