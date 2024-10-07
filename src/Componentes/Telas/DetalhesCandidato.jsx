import { Container, Table, Button } from "react-bootstrap";
import { useState } from "react";

export default function DetalhesCandidato(props) {

    const [questao, setQuestao] = useState("");

    function inserirDuvida(){
        props.candidatoSelecionado.questionamentos.push(questao);
    }

    return (
        <Container>
            <h1>Detalhes Candidato</h1>                             {/*propostas*/}
            <img variant="top" height="300" width="300" src={props.candidatoSelecionado.avatar} />
            <p>Nome: {props.candidatoSelecionado.nome}</p>
            <p>Email: {props.candidatoSelecionado.email}</p>
            <p>Essas são minhas propostas:</p>
            <ul>
                {
                    props.candidatoSelecionado.propostas.map((proposta) => {
                        return <li>{proposta}</li>
                    })
                }
            </ul>
            <br />
            <h2>Dúvidas ?</h2>
            <label>Insira sua duvida aqui: </label>

            <input type="text" id="duvida" value={questao} onChange={(evento)=>{
                setQuestao(evento.currentTarget.value);
                }}></input>

            <Button onClick={() => {
                inserirDuvida();
            }}>Perguntar</Button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Dúvidas dos eleitores</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.candidatoSelecionado.questionamentos.map((questao) => {
                            return <tr><td>{questao}</td></tr>
                        })
                    }
                </tbody>
            </Table>
            <Button onClick={() => {
                props.setDetalharCandidato(false);
            }
            }>Voltar</Button>
        </Container>
    );
}