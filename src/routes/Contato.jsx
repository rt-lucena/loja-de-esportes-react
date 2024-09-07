import { ContatoWrapper, FormGroup, Label, Input, TextArea, Button } from '../css/ContatoWrapper';

const Contato = () => {
    return (
        <ContatoWrapper>
            <h1>Contato</h1>
            <form>
                <FormGroup>
                    <Label htmlFor="name">Nome:</Label>
                    <Input type="text" id="name" name="name" placeholder="Seu nome" required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">E-mail:</Label>
                    <Input type="email" id="email" name="email" placeholder="Seu e-mail" required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="subject">Assunto:</Label>
                    <Input type="text" id="subject" name="subject" placeholder="Assunto" required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="message">Mensagem:</Label>
                    <TextArea id="message" name="message" placeholder="Sua mensagem" required />
                </FormGroup>
                <Button type="submit">Enviar</Button>
            </form>
        </ContatoWrapper>
    );
}

export default Contato;
