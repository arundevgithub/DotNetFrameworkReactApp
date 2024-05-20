class ReactApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>{this.props.AppName}</h1>
                <MyComponent />
              </>
        )
    }
}

//ReactDOM.render(
//    <ReactApp></ReactApp>,
//    document.getElementById('DivReactJS')
//)

const container = document.getElementById('DivReactJS');
const root = ReactDOM.createRoot(container);
root.render(<ReactApp AppName={header} />);