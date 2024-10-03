function PerInfo(props) {
    const { animal, age, hasPat } = props

    return (
        hasPat ?
            <h1>{`My ${animal } is ${age} years old`}</h1>
            :
            <h1>I don't have an animal</h1>
    )
}

export default PerInfo
