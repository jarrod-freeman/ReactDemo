import React from 'react';
import ReactDOM from 'react-dom';
import TournamentList from '../../components/ifpa/tournament/TournamentList';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TournamentList />, div);
    ReactDOM.unmountComponentAtNode(div);
});
