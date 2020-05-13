import React, { Component } from 'react';


class PersonCard extends Component{
    render(){
        if("person" in this.props){
            const { person } = this.props;
            return (
                <div>
                    <h1>{ person.last_name }, { person.first_name }</h1>
                    <p>Age: { person.age }</p>
                    <p>Hair Color: { person.hair_color }</p>
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
                </div>
            )
        }

    }
}

export default PersonCard;