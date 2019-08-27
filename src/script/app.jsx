import React from "react";
import ReactDOM from "react-dom";

const UserDetails = [{
    id: '1',
    firstName: 'Jhon',
    lastName: 'Walter'
}, {
    id: '2',
    firstName: 'Jhonny',
    lastName: 'English'
}, {
    id: '3',
    firstName: 'Tony',
    lastName: 'Stark'
}
];

class UserInitials extends React.Component {

    constructor() {
        super();
        this.state = {
            showDiv: false,
            firstName: '',
            lastName: '',
            id: 0
        }
    }
    render() {
        return (
            <div>
                <table border="1">
                    <tbody>
                        {UserDetails.map(item => {
                            return (<tr>
                                <td onClick={this.getFullName.bind(this, item.firstName, item.lastName, item.id)}>{item.firstName.charAt(0)}{item.lastName.charAt(0)}</td>
                            </tr>);
                        })}
                    </tbody>
                </table>
                <div>
                    {this.state.showDiv ? this.getDiv() : null}
                </div>
            </div>
        );
    }

    getDiv(){
        return(
            <div>
                First Name : <input id="fname" type="text" defaultValue={this.state.firstName} 
                            onChange={this.handleFirstNameChange.bind(this)}/><br/>
                Last Name : <input id="lname" type="text" defaultValue={this.state.lastName} 
                            onChange={this.handleLastNameChange.bind(this)}/><br/>
                <button onClick={this.updateName.bind(this)}>Update</button>
            </div>
        );
    }

    handleFirstNameChange(event){
        this.setState({
            firstName: event.target.value
        });
    }

    handleLastNameChange(event){
        this.setState({
            lastName: event.target.value
        });
    }

    updateName(event){
        event.preventDefault();
        UserDetails.map( item =>{
            if(item.id == this.state.id){
                item.lastName = this.state.lastName;
                item.firstName = this.state.firstName;
            }
        })
        this.setState({
            showDiv: false
        });
        // ReactDOM.render(
        //     <App />,
        //     document.getElementById('content')
        // );
    }

    getFullName(fName, lName, id) {
        this.setState(
            {
                showDiv: true,
                firstName: fName,
                lastName: lName,
                id: id
            }
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="main">
                <UserInitials />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);