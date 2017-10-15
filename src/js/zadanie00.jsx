import React from 'react';
import ReactDOM from 'react-dom';
//import './css/style.css';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';



document.addEventListener('DOMContentLoaded', function(){

    class Main extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                data: "null",

            }
        }

        render() {
            return(
                <div>
                    <button className={`main`}>to jest button</button>
                    <h1>{this.state.data.url}</h1>
                    <h1>{this.state.data.value}</h1>
                    <h2>to jest nowy napis</h2>
                    <h2>to jest nowy napis NOWY</h2>
                </div>
                )
        }

        componentDidMount() {
            fetch('https://api.chucknorris.io/jokes/random').then( resp => {
                return resp.json(); // jaki rodzaj pliku powinno zwrocic API
            }).then( value => { // value nazwa której przypisałem to co zwraca API
                this.setState({
                    data:value // Ustawienie w STEJTACH wartości która otrzymałem z API
                })
                console.log(value)

            }).catch( err => {
                console.log('Błąd!', err);
            });
        }

        componentWillUnmount() {

        }
    }

    class Contact extends React.Component {
        render() {
            return <div>
                <h1>Contact</h1>
                <Link to="/"><span>wróc do strony głównej</span></Link>
            </div>
        }
    }

    class NotFound extends React.Component {
        render() {
            return <h1>Brak</h1>
        }
    }

    class Template extends React.Component {
        render() {
            return (
                <div>
                    <h1>App</h1>
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                    </ul>

                    {this.props.children}
                </div>
            )
        }
    }

    class App extends React.Component {
        render() {
            return (
                <Router history={hashHistory}>
                    <Route path='/' component={Template}>
                        <IndexRoute component={Main} />
                        <Route path='/contact' component={Contact} />
                        <Route path='*' component={NotFound} />
                    </Route>
                </Router>
            )
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});