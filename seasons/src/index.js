import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";

// Class based component
class App extends React.Component {
    constructor(props) {
        super(props); // reference to the parent
        // THIS IS THE ONLY TIME we do direct assignment to this.state
        this.state = {
            lat: null, // set null as default
            long: null, // set null as default
            errorMessage: ""
        };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // ALWAYS US setState() when updating state of a class
                // NEVER set state directly by doing this.state.lat: ... NO NO NO
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                });
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    // called when component updates: location change, user input ...
    componentDidUpdate() {
        console.log('Component updated and rerendered');
    }

    // helper methods can be used to express conditional rendering
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        } else if (!this.state.errorMessage && !this.state.lat) {
            return <div><Spinner message="Looking up your weather ..."/></div>;
        } else {
            return (
            <SeasonDisplay lat={this.state.lat}/>
            );
        }
    }

    // render() is a React requirement
    render() {
        return (
            <div className="something to wrap the app with"> 
                {this.renderContent()}
            </div>
        )
    }

}
ReactDOM.render(<App />, document.querySelector("#root"));
