import React from 'react';
import Comment from './coment.jsx';

     class Board extends React.Component {
         constructor(props) {
             super(props);

             this.state = {
                 name: '',
                 date: '',
                 text: '',
                 comments: this.props.comments,
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
             const obj ={name: this.state.name, date: this.state.date,text: this.state.text}

             comments.push(obj)
             this.setState({
                 comments: comments,
                 name: '',
                 date: '',
                 text: '',
             })

             fetch('http://localhost:3000/comments', {
                 method : 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify(obj)
                }).then(r => r.json())
                    .then( data => {
                    console.log( data );
                    }).catch( err => {
                    console.log( err );
                    });

         }
         loadComents() {
             let list;
             if (this.state.comments.length > 0 ){
                 list = this.state.comments.map(i =>{
                    return <li> <Comment {...i} /> </li>
                 })
             } else {
                 list = [<li>brak komentarzy</li>]

             }
             return list
         }
        render() {
            return (
                <section className={"board"}>
                    <div className={"boardContent"}>
                        <a href="#">Hide comments <span>(353)</span></a>
                        <div className={"comments"}>
                            <ul>
                                {this.loadComents()}
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