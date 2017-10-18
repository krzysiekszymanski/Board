import React from 'react';
import Header from './components/header.jsx';
import Board from './components/board.jsx';


    class Index extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: null,
            }
        }

        render() {
           if(!this.state.data) {
            return <div className={"spinner loader"}>Wczytuję stronę</div>
           }
            return (
                <div>
                    <Header statistic={this.state.data.statistic}/>
                    <Board comments={this.state.data.comments}/>
                </div>
            )
        }

        componentDidMount() {
            fetch('http://localhost:3000/db').then( resp => {
                return resp.json(); // jaki rodzaj pliku powinno zwrocic API
            }).then( value => { // value nazwa której przypisałem to co zwraca API

                setTimeout(() => {
                    this.setState({ data:value });
                }, 3000);

            }).catch( err => {
                console.log('Błąd!', err);
            });
        }

        componentWillUnmount() {

        }


    }


export default Index;

