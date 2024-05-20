class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: new Person("firstname","lastname"),
        };
    }

    render() {
        return (
            <>
                <button onClick={this.getPerson}>getPerson</button>
                <button onClick={this.postPerson}>postPerson</button>
                <label>{this.state.person.firstname + ' ' + this.state.person.lastname}</label>
            </>
        )
    }

    getPerson = () => {

        fetch('/api/api/getperson', {
            //method: "POST", body: JSON.stringify(person),
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                "Accept": "application/json"
            }
        })
        .then((response => response.json()))
        .then((person) => {
            this.setState({ person: person})
        })
        .catch((error) => {
            console.log('error: ' + error);               
        });
    }

    postPerson = () => {

        var input = this.state.person;
        fetch('/api/api/postperson', {
            method: "POST", body: JSON.stringify(input),
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                "Accept": "application/json"
            }
        })
            .then((response => response.json()))
            .then((person) => {
                this.setState({ person: person })
            })
            .catch((error) => {
                console.log('error: ' + error);
            });
    }
}

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

