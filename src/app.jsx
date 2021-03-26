
import Cadastro from './components/cadastro'
import Pesquisa from './components/pesquisa'
import React from 'react'


import Menu from './template/menu'

export default props =>(
    <div id='App'>
        <Menu/>
        <hr/>
        <Cadastro/>
        <hr/>
        <Pesquisa/>
        <hr/>

    </div>
)