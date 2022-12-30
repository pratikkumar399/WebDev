import React, { Component } from 'react'

import SingleCard from './single-card.component'
import './card-list.styles.css'
import './card.styles.css'
export default class cardList extends Component {
    render() {
        const { monsters } = this.props
        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    return (
                        <SingleCard monster={monster} />
                    )
                })}
            </div>
        )
    }
}

