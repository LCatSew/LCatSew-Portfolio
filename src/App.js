import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

const App = () => {
    return (
        <div className="App">
        <Header />
        <Navigation />
        <MainContent />
        <Footer />
        </div>
    );
    }