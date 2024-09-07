// Home.jsx
import React, { useState } from 'react';
import { HomeWrapper, Banner, Testimonials, NewsletterSection } from '../css/HomeWrapper';

const Home = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Inscrito com sucesso! Email: ${email}`);
        setEmail('');
    };

    return (
        <HomeWrapper>
            <Banner>
                <h1>Descubra o Melhor Equipamento Esportivo</h1>
                <p>Explore nossa coleção de produtos de alta performance</p>
            </Banner>

            <Testimonials>
                <h2>O Que Nossos Clientes Dizem</h2>
            </Testimonials>

            <NewsletterSection>
                <h2>Assine Nossa Newsletter</h2>
                <p>Fique por dentro das novidades e promoções!</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Inscrever-se</button>
                </form>
            </NewsletterSection>
        </HomeWrapper>
    );
};

export default Home;
