import React from 'react';
import ReactDOM from 'react-dom';
import Index from "index.jsx";



document.addEventListener('DOMContentLoaded', function(){


    // class App extends React.Component {
    //     render() {
    //         return (
    //             <div>
    //                 <h1>hahhfa</h1>
    //                 <Index />
    //             </div>
    //
    //         )
    //     }
    // }

    ReactDOM.render(
        <Index />,
        document.getElementById('app')
    );
});