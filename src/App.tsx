import { Button } from '@material-ui/core';
import React, { useState } from 'react';

interface Props {
    setCount: Function,
    count: number
}

const MyButton: React.FC<Props> = props =>{

    const plusOne = () => {
        props.setCount(props.count + 1)
    }

    return (
        <Button variant="contained" color="primary" onClick={plusOne}>
        カウントアップ
        </Button>
    )
}

const initPoint = 0

const App: React.FC = () => {

    const [count, setCount] = useState(initPoint)

    return (
        <div className="App">
            <p>Hello TypeScript & Firebase!</p>
            <MyButton setCount={setCount} count={count} />
            <p>カウント: {count}</p>
        </div>
    )
}

export default App;
