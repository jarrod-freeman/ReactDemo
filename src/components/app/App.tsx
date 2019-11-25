import React from 'react';
import '../../css/App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import NavMenu from '../common/NavMenu';
import Profile from '../ifpa/ProfileComponent';
import TournamentList from '../ifpa/tournament/TournamentList';
import TournamentDetailsComponent, { TournamentDetailsProps } from '../ifpa/tournament/TournamentDetailsComponent';
import HomeComponent from '../HomeComponent';
import NotFound from '../common/NotFound';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Grid container spacing={0} justify="center">
                    <Grid item xs={12} md={9}>
                        <Header />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <NavMenu />
                    </Grid>
                    <Grid className="content" item xs={12} md={9}>
                        <Container >
                            <Switch>
                                <Route exact path="/" component={HomeComponent} />
                                <Route exact path="/tournaments" component={TournamentList} />
                                <Route path="/tournaments/:TournamentID/:EventName" render={ (props: TournamentDetailsProps) => { return <TournamentDetailsComponent TournamentID={props.match.params.TournamentID}  EventName={props.match.params.EventName} />; } } />
                                <Route path="/players" component={Profile} />
                                <Route component={NotFound} />
                            </Switch>
                        </Container>
                    </Grid>
                </Grid>
            </HashRouter>
            <Footer />
        </div>
    );
};

export default App;
