import { useState } from 'react';

// const Timer : React.FC = () => {
//     const [seconds, setSeconds] = useState<number>(0);

//     return (
//         <div>
//             <h2>타이머 : {seconds}초</h2>
//             <button onClick={
//                 () => {
//                     setInterval(() => {
//                         setSeconds((prev)=> prev + 1)
//                     }, 1000)
//                 }
//             }>시작</button>
//         </div>
//     )
// }

const Clock : React.FC = () => {
    const [Time, setTime] = useState(new Date());

    setInterval(() => {setTime(new Date())}, 1000)

    return (
        <div>
            <h2>현재 시간</h2>
            {Time.toLocaleTimeString()}
        </div>
    )
}

export default Clock;