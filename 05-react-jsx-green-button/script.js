const App = ({ initialButtonText, initialTextColor }) => {
    const [buttonText, setButtonText] = React.useState(initialButtonText)
    const [buttonColor, setButtonColor] = React.useState(initialTextColor)
    const onButtonClick = () => {
        setButtonText ('Hello Olya')
        setButtonColor('green-btn')
    }
    return (
        <div className="app">
            <button className={buttonColor} onClick={onButtonClick}>{buttonText}</button>
        </div>
    )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App initialButtonText="Click me" initialTextColor=''/>)