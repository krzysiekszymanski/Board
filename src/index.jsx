import React from 'react';
import Header from './components/header.jsx';
import Board from './components/board.jsx';


    class Index extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                data: "null",

            }
        }
        render() {
            return (
                <div>
                    <Header/>
                    <Board/>
                </div>
            )
        }

        componentDidMount() {

        }

        componentWillUnmount() {

        }


    }


export default Index;

