import { useState } from "react";
import { CountUp } from "./CountUp";
import { DisplayCount } from "./DisplayCount";

export function Counter(){
    // Eftersom båda child-komponenterna behöver tillgång till statet ska Counter äga det
    const [digit, setDigit] = useState(0);

    return (
        <div>
            <DisplayCount digit={digit}/>
            <CountUp setDigit={setDigit} digit={digit}/>
        </div>
    )
}