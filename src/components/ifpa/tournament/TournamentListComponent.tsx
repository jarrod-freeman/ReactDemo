import React, {Component, Fragment} from 'react';
import Tournament from '../../../models/ifpa/Tournament';
import  '../../../css/TournamentList.css'

type MyProps = { };
type MyState = { tournamentList: Array<Tournament> };

class TournamentListComponent extends Component<MyProps, MyState>{
    constructor(props: MyProps){
        super(props);

        this.state = {
            tournamentList: new Array<Tournament>()
        }
    }

    public componentDidMount(){
        fetch('https://api.ifpapinball.com/v1/tournament/list?api_key=&start_pos=0&count=50')
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(data && data.tournament){
                var tournaments = data.tournament.map((x: any) => {
                   return new Tournament({
                       ID: +x.tournament_id, 
                       Name: x.tournament_name,
                       EventName: x.event_name,
                       EventDate: new Date(x.event_date),
                       WinnerName: x.winner_name,
                       WinnerID: +x.winner_player_id,
                       CountryCode: x.country_code,
                       CountryName: x.country_name,
                       PlayerCount: +x.player_count
                    });
                });
                
                this.setState({tournamentList: tournaments});
            }
        });
    }

    public render(){
        return (
            <div>
                <h2>Tournaments</h2>
                <table className="tournaments">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Tournament Name</td>
                            <td>Event name</td>
                            <td>Event Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tournamentList.map((e: Tournament, i: number) => {
                                return(
                                    <Fragment key={i}>
                                        <tr>
                                            <td>{e.ID}</td>
                                            <td>{e.Name}</td>
                                            <td>{e.EventName}</td>
                                            <td>{e.EventDate.toDateString()}</td>
                                        </tr>
                                    </Fragment>
                                )
                        })}
                    </tbody>
                </table>
            </div>
    );
    }
}

export default TournamentListComponent;