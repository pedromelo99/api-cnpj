import Header from './components/Header';
import Footer from './components/Footer';
import SearchCNPJ from './components/SearchCNPJ';
import './styles/App.css';

function App() {
    return (
        <div className="app">
            <Header />
            <main className="app-content">
                <SearchCNPJ />
            </main>
            <Footer />
        </div>
    );
}

export default App;
