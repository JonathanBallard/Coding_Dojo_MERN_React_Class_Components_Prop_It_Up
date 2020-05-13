import React, { Component } from 'react';


class PersonCard extends Component{
    constructor(props){
        super(props);
        if("person" in props){
            this.state = {
                age: props.person.age,
            }
        }
        else {
            this.state = {
                age: props.age,
            }
        }
    }
    render(){
        if("person" in this.props){
            const { person } = this.props;
            return (
                <div>
                    <h1>{ person.last_name }, { person.first_name }</h1>
                    <p>Age: { this.state.age }</p>
                    <p>Hair Color: { person.hair_color }</p>
                    <button onClick={ () => this.setState({age: this.state.age + 1})}>Birthday for {person.first_name} {person.last_name}</button>
                </div>
            )
        }
        else {
            const { first_name, last_name, age, hair_color } = this.props;
            return (
                <div>
                    <h1>{ last_name }, { first_name }</h1>
                    <p>Age: { age }</p>
                    <p>Hair Color: { hair_color }</p>
                    <button onClick={ () => this.setState({age: this.state.age + 1})}>Birthday for {first_name} {last_name}</button>
                </div>
            )
        }
    }
}

export default PersonCard;