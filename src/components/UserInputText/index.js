const UserInputText = props => {
  const {userInputDetails} = props
  const {textLength, userEnteredText} = userInputDetails
  return (
    <>
      <div>
        <h1>
          {userEnteredText}:{textLength}
        </h1>
      </div>
    </>
  )
}
export default UserInputText
