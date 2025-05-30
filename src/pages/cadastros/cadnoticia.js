import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Cadnoticia() {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="titulonoticia">
                    <Form.Label>Título Notícia</Form.Label>
                    <Form.Control type="text" className='bg-body-tertiary' placeholder="Informe o Título da Notícia" maxLength={100}/>
                    <Form.Text className="text-muted">
                        Aqui você deve informar o título de sua notícia.
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId="conteudonoticia">
                    <Form.Label>Conteúdo Notícia</Form.Label>
                    <Form.Control as="textarea" className='bg-body-tertiary' rows={3} placeholder="Informe o conteúdo da Notícia" />
                    <Form.Text className="text-muted">
                        Aqui você deve informar o conteúdo de sua notícia.
                    </Form.Text>
                </Form.Group>
                <Form.Group cllassName='mn-3' controlId='tiponoticia'>
                    <Form.Label>Tipo Notícia</Form.Label>
                    <Form.Select className='bg-body-tertiary' aria-label="Default select example">
                        <option>Selecione o tipo de notícia</option>
                        <option value="1">Esporte</option>
                        <option value="2">Política</option>
                        <option value="3">Economia</option>
                        <option value="4">Saúde</option>
                    </Form.Select>
                    <Form.Text className="text-muted">
                        Aqui você deve informar o tipo de notícia.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='bg-body-tertiary' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
