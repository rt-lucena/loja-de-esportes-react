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
                <div>
                    <blockquote>
                        <p>"Comprei uma esteira e alguns acessórios esportivos, e a qualidade dos produtos é excelente! O atendimento também foi muito bom, com entrega rápida e fácil comunicação. Recomendo a todos que buscam equipamentos de alta performance!"</p>
                        <footer>— Lucas S.</footer>
                    </blockquote>
                    <blockquote>
                        <p>"Fiquei impressionada com a variedade de produtos disponíveis. Comprei um conjunto de pesos e já percebo a diferença no meu treino diário. Além disso, o suporte ao cliente foi muito prestativo!"</p>
                        <footer>— Maria F.</footer>
                    </blockquote>
                    <blockquote>
                        <p>"A experiência de compra foi muito satisfatória, desde a escolha dos produtos até a entrega. Comprei uma bicicleta ergométrica e ela chegou em perfeitas condições. Ótimo custo-benefício!"</p>
                        <footer>— João P.</footer>
                    </blockquote>
                </div>
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