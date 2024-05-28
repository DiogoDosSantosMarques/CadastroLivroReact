import {useState, useEffect} from "react"

import "./Main.css";  // Importe o arquivo CSS

const Main = () => {

    const [nome, setNome] = useState("")
    const [paginas, setPaginas] = useState("")
    const [autor, setAutor] = useState("")

    
    const [livros, setLivros] = useState(() => {
        const savedLivros = localStorage.getItem("livros")
        return savedLivros ? JSON.parse(savedLivros) : []
    })

    // Salvar dados no localStorage sempre que a lista de livros mudar

    useEffect(() => {

        localStorage.setItem("livros", JSON.stringify(livros));


    }, [livros])
    

    const handleSubmit = (e) => {

        e.preventDefault()

        setLivros([...livros, {nome, paginas, autor}])

        setNome("");
        setPaginas("");
        setAutor("");
    }


    const deleteSubmit = (index) => {

        const newLivro = livros.filter((_, i) => i !== index)

        setLivros(newLivro)
        
    }


   


    return(

        <div className="container">

<h2>Cadastro de Livro</h2>

<section id="campos">
            <form id="formulario" onSubmit={handleSubmit}> 
                <input class="campos" type="text" name="nome" placeholder="Nome do Livro" value={nome} onChange={(e) => setNome(e.target.value)} /> 
                <input class="campos" type="text" name="paginas" placeholder="Páginas do Livro" value={paginas} onChange={(e) => setPaginas(e.target.value)} /> 
                <input class="campos" type="text" name="autor" placeholder="Autor do Livro" value={autor} onChange={(e) => setAutor(e.target.value)} />
                
                <button>Salvar</button>
                
            </form>
        </section>



        <section id="tabela">
            <div id="header_tabela">
                <div class="nome">Nome</div>
                <div class="paginas">Páginas</div>
                <div class="autor">Autor</div>
                
            </div>


            <div id="body_tabela">

        {livros.map((livro, index) => (

            <>

            <div className="nomes" key={index}>

            <div className="nome">{livro.nome}</div>
              <div className="paginas">{livro.paginas}</div>
              <div className="autor">{livro.autor}</div>
              
              
            </div>

            <button onClick={() => deleteSubmit(index)} className="btn">Deletar</button>
             <button className="btn-edit">Editar</button>

            </>

        ))}
        

            </div>
        </section>

        </div>

    )
}

export default Main