import React from 'react';
import Comment from './coment.jsx';

     class Board extends React.Component {
         constructor(props) {
             super(props);

             this.state = {
                 name: '',
                 date: '',
                 text: '',
                 comments: [],
             }
         }
         handleName = (event) => {
             this.setState({
                 name: event.target.value,
             })
         }

         handleDate = (event) => {
             this.setState({
                 date: event.target.value,
             })
         }

         handleText = (event) => {
             this.setState({
                 text: event.target.value,
             })
         }
         sendForm = (event) => {
             event.preventDefault()

             const comments = this.state.comments.slice();

             comments.push({name: this.state.name, date: this.state.date,text: this.state.text})
             this.setState({
                 comments: comments,
                 name: '',
                 date: '',
                 text: '',
             })
         }

        render() {
            const list = this.state.comments.map(i =>{
                return <li> <Comment {...i} /> </li>
            })
            return (
                <section className={"board"}>
                    <div className={"boardContent"}>
                        <a href="#">Hide comments <span>(353)</span></a>
                        <div className={"comments"}>
                            <ul>
                                {list}
                            </ul>
                        </div>
                        <form>
                            <input type="text" placeholder={'Add a name'} value={this.state.name} id={"name"}
                                   onChange={ this.handleName}/>
                            <input type="date"id={"date"} value={this.state.date}
                                   onChange={ this.handleDate }/>
                            <input type="text" placeholder={'Add a comment'} value={this.state.text} id={"coment"}
                                   onChange={ this.handleText }/>
                            <button onClick={this.sendForm}>Wyślij</button>
                        </form>
                    </div>
                </section>
            )
        }
    }

    export default Board;