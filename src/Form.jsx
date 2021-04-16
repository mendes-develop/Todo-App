const Form = props => {
    const input = props.input;
    const onChange = props._onChange;
    const onClick = props._onClick;

    return (
        <div className='Form'>
            <input
                className='InputItem'
                type='text'
                value={input}
                onChange={onChange}
            />
            <button className='AddButton' onClick={onClick}>
                Adicionar
            </button>
        </div>
    );
};

export default Form;
