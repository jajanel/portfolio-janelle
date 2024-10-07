import './App.css';
import Title from "./components/Title.jsx";
import Navbar from "./components/Navbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Card from "./components/Card.jsx";

function App() {
    return (
        <>
            <Navbar />
            <Title />
            <Card />
        </>
    );
}

export default App;