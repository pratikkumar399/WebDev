import React, { Component } from 'react'

export default class SingleCard extends Component {
    render() {
        const { id, name, email } = this.props.monster
        return (
            <div className="card-container" key={id} >
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`}
                    alt={`monster ${name}`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>);
    }
}
