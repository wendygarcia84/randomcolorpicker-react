import React from 'react';
import { Random } from "../Random/Random";
import { Button } from "../Button/Button";

class App extends React.Component {
    render() {
        return (
            <div>
                <Random />
                <Button />
            </div>
        );
    }
}

export default App;