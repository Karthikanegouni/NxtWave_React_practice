import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const CreditCardDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3b4b69;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const CreditCardHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CreditCardHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 600;
  margin-top: 33px;
  margin-bottom: 7px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
    margin-top: 95px;
    margin-bottom: 13px;
    line-height: 1.3;
  }
`

export const HorizontalLine = styled.hr`
  width: 119px;
  border: 2px solid #ffd773;
  margin: 0;
  @media screen and (min-width: 768px) {
    width: 172px;
  }
`

export const CardContainer = styled.div`
  margin-top: 49px;
  margin-bottom: 49px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    flex-grow: 1;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 280px;
  height: 200px;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0px 4px 33px #344e7a;
  @media screen and (min-width: 768px) {
    width: 376px;
    height: 296px;
    border-radius: 43px;
    padding: 33px;
  }
  @media screen and (min-width: 992px) {
    width: 476px;
    height: 326px;
    padding: 48px;
  }
`

export const CardNumber = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.33;
  }
  @media screen and (min-width: 992px) {
    font-size: 43px;
  }
`

export const CardholderNameText = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 10px;
  margin: 0;
  margin-top: 32px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-top: 51px;
    line-height: 1.33;
  }
  @media screen and (min-width: 992px) {
    font-size: 19px;
  }
`

export const CardholderName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 13px;
  margin: 0px;
  margin-top: 7px;
  min-height: 15px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 17px;
    margin-top: 13px;
    min-height: 27px;
    line-height: 1.5;
  }
  @media screen and (min-width: 992px) {
    font-size: 25px;
    min-height: 35px;
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: '#ffffff';
  width: 90%;
  max-width: 351px;
  border-radius: 8px;
  margin-top: 32px;
  padding: 32px 24px;
  box-shadow: 0px 4px 16px #d3d9e0;
  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 48px;
    max-width: 450px;
  }
`

export const PaymentMethodHeading = styled.h1`
  text-align: center;
  color: #475569;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 8px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`

export const Input = styled.input`
  color: #475569;
  background-color: '#ffffff';
  font-family: 'Roboto';
  font-size: 15px;
  border: 1px solid #c3cad9;
  border-radius: 2px;
  margin-top: 25px;
  padding: 12px 24px;
  outline: none;
  @media screen and (min-width: 768px) {
    padding: 16px 24px;
  }
`
