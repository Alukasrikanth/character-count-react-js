import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin-bottom: 40px;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
`

export const LeftPanel = styled.div`
  background-color: #ffc533;
  width: 50%;
  height: 100vh;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 20px;
`

export const InfoCardContainer = styled.div`
  background-color: #ffbf1f;
  border-top-left-radius: 10px;
  padding: 10px;
`

export const Info = styled.h1`
  color: #334155;
  font-weight: bold;
  font-size: 28px;
  font-family: 'Roboto';
  line-height: 50px;
`

export const RightPanel = styled.div`
  background-color: #0f172a;
  height: 100vh;
  width: 50%;
  padding: 20px;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const CounterHeading = styled.h1`
  color: #ffbf1f;
  font-weight: bold;
  font-size: 32px;
  font-family: 'Roboto';
  text-align: center;
  margin-bottom: 60px;
`

export const AddInputContainer = styled.form`
  display: flex;
`

export const Input = styled.input`
  height: 35px;
  width: 100%;
  border-radius: 4px;
  outline: none;
  border: none;
  padding-left: 15px;
  color: #475569;
  font-size: 16px;
`

export const AddInputButton = styled.button`
  height: 35px;
  background-color: #ffc533;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 15px;
  padding: 10px 20px 10px 20px;
  color: #334155;
  font-weight: bold;
  font-size: 14px;
  font-family: 'Roboto';
`

export const UserInputsList = styled.ul`
  margin-top: 50px;
`

export const EmptyImg = styled.img`
  height: 400px;
  width: 100%;
  padding: 50px;
  margin-top: 60px;
`