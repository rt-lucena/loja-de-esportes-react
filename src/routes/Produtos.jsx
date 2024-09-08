import {ProdutosWrapper, Card, CardTitle, CardDescription, CardImage } from '../css/ProdutosWrapper';
import Luvas from '../assets/Luvas.jpg'
import Placar from '../assets/Placar.jpg'
import Tenis from '../assets/Tenis.jpg'

const Produtos = () => {
    return (
        <ProdutosWrapper>
            <h1>Produtos</h1>
            <Card>
                <CardImage src={Luvas} alt="Produto 1" />
                <CardTitle>LUVA DE GOLEIRO POKER CHAMPION 8 EXTENDED</CardTitle>
                <CardDescription>Descubra o próximo nível de desempenho e estilo com a Luva de Goleiro Poker Champion 8 Extended. Seu design ergonômico proporciona uma sensação de movimento e fluidez, permitindo que você se destaque em campo com confiança.</CardDescription>
            </Card>
            <Card>
                <CardImage src={Placar} alt="Produto 2" />
                <CardTitle>PLACAR DE MESA ATHI 31PTS E 7SETS - PRETO UN</CardTitle>
                <CardDescription>O Placar de Mesa Multi Esportivo da marca Athi, é um item essencial para acompanhar e registrar os pontos em diversos jogos esportivos. Fabricado em PVC rígido na cor preta, esse placar é resistente e durável, garantindo sua longa vida útil. </CardDescription>
            </Card>
            <Card>
                <CardImage src={Tenis} alt="Produto 3" />
                <CardTitle>TÊNIS ASICS GEL-PULSE 15 FEMININO</CardTitle>
                <CardDescription>O Tênis Asics Gel-Pulse 15 Feminino, é seu parceiro ideal para corridas leves e caminhadas, projetado para oferecer conforto e amortecimento. O cabedal em Jacquard mesh é um destaque deste modelo, proporcionando leveza e respirabilidade que reduzem a necessidade de construções adicionais, garantindo um ajuste confortável e arejado. A tecnologia GEL na parte traseira do calçado garante uma absorção de impacto excepcional, enquanto a entressola Flytefoam proporciona uma sensação de leveza e conforto sob os pés, ajudando a impulsionar sua performance para novos patamares.</CardDescription>
            </Card>
        </ProdutosWrapper>
    );
}

export default Produtos;
