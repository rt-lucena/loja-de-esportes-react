import { SobreWrapper, Titulo } from '../css/SobreWrapper';
import Atleta from '../assets/Atleta.jpg'

const Sobre = () => {
    return (
        <SobreWrapper>
            <Titulo>Sobre</Titulo>
            <img src={Atleta} width={1080} height={720} alt="Atleta" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nisi quia ut deleniti. Rem alias impedit similique corporis facilis culpa doloremque inventore, tenetur repellendus id eum, incidunt optio illo laudantium?</p>
        </SobreWrapper>
    );
}

export default Sobre;
