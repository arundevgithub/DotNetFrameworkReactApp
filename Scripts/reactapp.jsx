class ReactApp extends React.Component {
    render() {
        return (
            <>
                <h1>My React App</h1>
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
root.render(<ReactApp/>);