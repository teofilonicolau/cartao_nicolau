import { Header } from './components/Header';
import { ContactActions } from './components/ContactActions';
import { SocialLinks } from './components/SocialLinks';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { rianData } from './data/Data';
import './styles/index.css';

function App() {
    return (
        <div className="container">
            <Header data={rianData} />
            <main>
                <ContactActions data={rianData} />
                <SocialLinks data={rianData} />

                {/* Footer info directly here or in component */}
                <div className="text-center" style={{ padding: '2rem', color: 'var(--text-light)', fontSize: '0.8rem' }}>
                    <p>© 2025 Rian Nicolau</p>
                    <p>Powered by TamarAI</p>
                    <p>Todos os direitos reservados.</p>
                </div>
            </main>
            <FloatingWhatsApp phoneNumber={rianData.contact.whatsapp} />
        </div>
    );
}

export default App;
