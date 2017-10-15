import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import Board from './components/board.jsx';

document.addEventListener('DOMContentLoaded', function() {
    class Index extends React.Component {
        render() {
            return (
                <div>
                    <Header/>
                    <Board/>
                    <p>lalla</p>
                </div>
            )
        }
    }

    ReactDOM.render(
        <Index />,
        document.getElementById('app')
    );
});
export default Index;

