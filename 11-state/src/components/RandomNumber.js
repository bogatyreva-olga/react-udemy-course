import {useState} from "react";
import {generateRandomNum} from "../utils/generateRandomNum";

function RandomNumber({maxNum}) {
    const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum))
    const changeRandomMum = () => {
        setRandomNum(generateRandomNum(maxNum))
    }

    return (
        <div>
            <h1>{randomNum}</h1>
            <button onClick={changeRandomMum}>Generate new random number</button>
        </div>
    )
}

export default RandomNumber
