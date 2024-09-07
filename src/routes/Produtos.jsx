import { ProdutosWrapper, Card, CardTitle, CardDescription, CardImage } from '../css/ProdutosWrapper';

const Produtos = () => {
    return (
        <ProdutosWrapper>
            <h1>Produtos</h1>
            <Card>
                <CardImage src="https://via.placeholder.com/300" alt="Produto 1" />
                <CardTitle>Produto 1</CardTitle>
                <CardDescription>Descrição do Produto 1</CardDescription>
            </Card>
            <Card>
                <CardImage src="https://via.placeholder.com/300" alt="Produto 2" />
                <CardTitle>Produto 2</CardTitle>
                <CardDescription>Descrição do Produto 2</CardDescription>
            </Card>
            <Card>
                <CardImage src="https://via.placeholder.com/300" alt="Produto 3" />
                <CardTitle>Produto 3</CardTitle>
                <CardDescription>Descrição do Produto 3</CardDescription>
            </Card>
        </ProdutosWrapper>
    );
}

export default Produtos;
