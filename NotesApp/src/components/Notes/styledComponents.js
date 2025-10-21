import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 48px;
  margin-bottom: 48px;
  @media screen and (min-width: 768px) {
    width: 80%;
    max-width: 1200px;
  }
`

export const Heading = styled.h1`
  text-align: center;
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 24px;
  font-weight: normal;
  margin: 0px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 1.5;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  margin-top: 32px;
  padding: 16px;
  box-shadow: 0px 4px 14px #aab8c8;
  @media screen and (min-width: 768px) {
    margin-top: 64px;
    padding: 24px;
  }
`

export const TitleInput = styled.input`
  color: #475569;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  border: none;
  outline: none;
  line-height: 1.33;
`

export const NoteTextArea = styled.textarea`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  border: none;
  margin-top: 32px;
  outline: none;
  line-height: 1.5;
`

export const AddButton = styled.button`
  color: #ffffff;
  background-color: #4c63b6;
  font-family: 'Roboto';
  font-size: 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-top: 8px;
  margin-right: 12px;
  margin-bottom: 8px;
  padding: 12px 24px;
  align-self: flex-end;
  cursor: pointer;
  outline: none;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }
`

export const EmptyNotesViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`
export const Image = styled.img`
  width: 80px;
  @media screen and (min-width: 768px) {
    width: 141px;
  }
`
export const EmptyNotesHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 4px;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const Description = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0;
  margin-top: 4px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`

export const NotesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  padding-left: 0;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`
