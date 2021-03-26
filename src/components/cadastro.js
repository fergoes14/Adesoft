import React from 'react'

import { Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';


export default props =>(
    <div className='container'>
        
        <Jumbotron>
       <Form>
       <FormGroup>
        <Label for="exampleEmail">Nome Completo</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="EX: Fernando De Goes" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Nome do Cão</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="EX: Amora" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Raça</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="EX: Pastor Alemão" />
      </FormGroup>
       </Form>
       <p className="lead">
        <Button outline color="success" size="lg" block>Cadastrar</Button>
        </p>
       </Jumbotron>
        
    </div>
)