import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GetTickets } from './../actions';

class TicketList extends Component {

    componentDidMount() {
        this.props.GetTickets();
    }

    showTickets() {
        return _.map(this.props.tickets, ticket => {
            return (
                <li key={ticket.id}>{ticket.description}</li>
            )
        })

    }

    render() {
        return (
            <div>
                <h1>Lista de Tickets</h1>
                <br />
                <ul>
                    {this.showTickets()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tickets: state.tickets
    }
}

export default connect(mapStateToProps, { GetTickets })(TicketList)