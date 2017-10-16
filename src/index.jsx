import React from 'react';
import Header from './components/header.jsx';
import Board from './components/board.jsx';


    class Index extends React.Component {
        render() {
            return (
                <div>
                    <Header/>
                    <Board/>
                </div>
            )
        }
    }


export default Index;

