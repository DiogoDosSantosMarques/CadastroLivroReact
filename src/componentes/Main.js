import {useState} from "react"

const Main = () => {


    return(

        <main>

<section id="campos">
            <form id="formulario"> 
                <input class="campos" type="text" name="nome" placeholder="Nome do Livro" /> 
                <input class="campos" type="text" name="paginas" placeholder="Páginas do Livro" /> 
                <input class="campos" type="text" name="autor" placeholder="Autor do Livro" />
                
                <button>Salvar</button>
                
            </form>
        </section>



        <section id="tabela">
            <div id="header_tabela">
                <div class="nome">Nome</div>
                <div class="paginas">Páginas</div>
                <div class="autor">Autor</div>
                <div class="acoes">Ações</div>
            </div>


            <div id="body_tabela">
            </div>
        </section>

        </main>

    )
}

export default Main