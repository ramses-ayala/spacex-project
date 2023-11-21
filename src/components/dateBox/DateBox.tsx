
const DateBox = ({handlerDate}: {handlerDate: React.ChangeEventHandler<HTMLInputElement>}) => {
  return (
    <input 
        type="date"
        onChange={handlerDate}
    />
  )
}

export default DateBox