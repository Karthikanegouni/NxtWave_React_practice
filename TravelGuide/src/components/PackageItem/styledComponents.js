import styled from 'styled-components'

export const PackageItemContainer = styled.li`
  width: 100%;
  max-width: 300px;
  color: #ffffff;
  box-shadow: 4px 4px 14px #bfbfbf;
  border-radius: 10px;

  @media (min-width: 768px) {
    max-width: 500px;

    p {
      font-size: 1.3rem;
    }
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`

export const TextContainer = styled.div`
  padding: 0.5em 1em;
`

export const PackageTitle = styled.h1`
  font-size: 1.3rem;
  color: #475569;
`

export const Description = styled.p`
  color: #64748b;
`
