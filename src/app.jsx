import React from 'react';
import ReactDOM from 'react-dom';
import Index from "./index.jsx";



document.addEventListener('DOMContentLoaded', function(){


    class App extends React.Component {
        render() {
            return (
                <div>
                    <Index />
                </div>

            )
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});