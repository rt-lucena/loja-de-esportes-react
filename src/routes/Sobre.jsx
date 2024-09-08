import { SobreWrapper, Titulo } from '../css/SobreWrapper';
import Atleta from '../assets/Atleta.jpg'

const Sobre = () => {
    return (
        <SobreWrapper>
            <Titulo>Sobre</Titulo>
            <img src={Atleta} width={1080} height={720} alt="Atleta" />
            <p>
                Bem-vindo à nossa loja de esportes, onde a qualidade e a satisfação do cliente são nossas maiores prioridades! Oferecemos uma ampla variedade de produtos, desde bicicletas ergométricas até conjuntos de pesos e esteiras, todos selecionados para proporcionar o melhor desempenho e durabilidade.
                Nosso compromisso é garantir que cada etapa da sua experiência de compra seja excepcional, desde a escolha dos produtos até a entrega rápida e eficiente. Nossa equipe de atendimento ao cliente está sempre pronta para ajudar, oferecendo suporte prestativo e comunicação fácil.
                Se você está buscando equipamentos de alta performance para melhorar seu treino diário ou acessórios esportivos de qualidade, nossa loja é o lugar certo. Venha nos visitar e descubra como podemos ajudar você a alcançar seus objetivos esportivos com produtos de excelente custo-benefício.
            </p>
        </SobreWrapper>
    );
}

export default Sobre;
