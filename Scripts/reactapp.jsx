class ReactApp extends React.Component {
    render() {
        return (
            <>
                <h1>My React App</h1>
                <MyComponent/>
            </>
        )
    }
}

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "try"
        };
    }

    render() {
        return(
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

//ReactDOM.render(
//    <ReactApp></ReactApp>,
//    document.getElementById('DivReactJS')
//)

const container = document.getElementById('DivReactJS');
const root = ReactDOM.createRoot(container);
root.render(<ReactApp/>);