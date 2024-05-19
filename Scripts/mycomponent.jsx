class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "try"
        };
    }

    render() {
        return (
            <>
                <button onClick={this.callAPI}>Call API</button>
                <label>{this.state.data}</label>
            </>
        )
    }

    callAPI = () => {

        fetch('/React/GetHello')
            .then((response => response.json()))
            .then((person) => {
                this.setState({ data: person.Name })
            });


    }
}

