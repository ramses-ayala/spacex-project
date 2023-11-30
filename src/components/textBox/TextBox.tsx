

const TextBox = ({placeholder, handlerSearch}: {placeholder: string; handlerSearch: React.ChangeEventHandler<HTMLInputElement>}) => {
    return(
        <input
            type="text"
            placeholder={placeholder}
            onChange={handlerSearch}
        />
    )
}

export default TextBox;