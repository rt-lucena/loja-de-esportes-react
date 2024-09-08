import React, { useState } from 'react';
import { ContatoWrapper, FormGroup, Label, Input, TextArea, Button } from '../css/ContatoWrapper';

const Contato = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            alert('Formulário enviado com sucesso!');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setErrorMessage('Ocorreu um erro ao enviar o formulário. Tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <ContatoWrapper>
            <h1>Contato</h1>
            {errorMessage && <p>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="name">Nome:</Label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">E-mail:</Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Seu e-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="subject">Assunto:</Label>
                    <Input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Assunto"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="message">Mensagem:</Label>
                    <TextArea
                        id="message"
                        name="message"
                        placeholder="Sua mensagem"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </Button>
            </form>
        </ContatoWrapper>
    );
};

export default Contato;
