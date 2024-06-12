import { Input, Button, Div, H2} from "./administradores"
import Adm from "./Header/HeaderADM";
const Administradores = () => {
    return(
    
         <>
         <Adm/>
        <Div>
            <br />
            <H2>Adicionar Aviso</H2>
            <br />
        <Input type="number"
        placeholder="DIA"
        />
        <Input type="text"
        placeholder="MÊS"
        />
        <Input type="text"
        placeholder="TURMA/TODAS AS TURMAS"
        />
        <Button>ENVIAR</Button>
        </Div>
        </>
    )
}
export default Administradores;