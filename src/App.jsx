import Cards from "./components/cards"
import Style from "./styles.modoles.css"
import { isEmpty, maxCaracter, selectIsEmpty } from "./utils"
import { useState } from 'react';


const App = () => {

  const [formState, setFormState] = useState({ planeta: "", descricao: "" });
  const [formError, setFormError] = useState(false);
  const [cards, setCards] = useState([])
  const [listErrors, setListErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault()

    const errors = []

    if (selectIsEmpty(formState.planeta)) {
      errors.push({ erro: true, mensagem: ' selecione um planeta'})

    }

    if (isEmpty(formState.descricao)) {
      errors.push({ erro: true, mensagem: ' Adicione uma decrição com até 60 caracteres'})

    }

    if (maxCaracter(formState.descricao.length)) {
      errors.push({ erro: true, mensagem: ' A descrição deve ter no máximo 60 caracteres'})
    }
    
    setFormError(errors.length > 0)

    if (errors.length == 0) {
      setCards([...cards, { planeta: formState.planeta, descricao: formState.descricao}])
      setFormState({ planeta: '', descricao: ''})
    }



    setListErrors(errors.map((error, index) => <span key={`err-${index}`} className='error'>{error.mensagem}</span>))

  }

  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit} className= { `${ formError == true ? ' formError' : ''}`}>
          <h1>ADICIONE UM PLANETA</h1>
          <div className= "container-form">
            <label>Planeta</label>
            <label>Descrição
              <div className={formState.descricao.length > 60 ? 'contador-caracteres-error' : ""}>
                <span>
                  {formState.descricao.length}
                  <span>/60</span>
                </span>
              </div>
            </label>
            <select value={formState.planeta}
              onChange={(event) => setFormState({ ...formState, planeta: event.target.value })}>
              <option disabled hidden value=""></option>
              <option value="mercurio">Mercúrio</option>
              <option value="venus">Vênus</option>
              <option value="terra">Terra</option>
              <option value="marte">Marte</option>
              <option value="jupiter">Júpiter</option>
              <option value="saturno">Saturno</option>
              <option value="urano">Urano</option>
              <option value="netuno">Netuno</option>
            </select>
            <input value={formState.descricao}
              onChange={(event) => setFormState({ ...formState, descricao: event.target.value })}
              placeholder="Deixe aqui uma descrição do Planeta"
              className="description" />
            <input className="button" type="submit" value="adicionar" />
          </div>
        </form>
        { formError ? <div className="container-list-error">{ listErrors }</div> : "" }
        <Cards material={ cards } />
      </div></>

  )
}

export default App
