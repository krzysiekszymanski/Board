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
            // let myInit = {
            //     method: 'POST',
            //
            //     body: JSON.stringify({
            //         statistic: 'yourValue',
            //         secondParam: 'yourOtherValue',
            //     })
            // };

             fetch('http://localhost:3001/db/db.json')
             .then( resp => {
                return resp.json();
            }).then( value => {
                console.log(value);
                this.setState({
                    data:value
                })


            }).catch( err => {
                console.log('Błąd!', err);
            });
        }

        componentWillUnmount() {

        }


    }


export default Index;

