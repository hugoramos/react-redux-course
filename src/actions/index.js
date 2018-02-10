export  function GetTickets() {
    return {
        type: 'GET_TICKETS',
        payload: [
            { id: 1, description: 'ajeitar ar-conds' },
            { id: 2, description: 'pintar parede' },
            { id: 3, description: 'fechar porta' },
        ]
    }
}