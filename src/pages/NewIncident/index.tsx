import { FormEvent, useState } from 'react'
import {FiArrowLeft} from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import { useCase } from '../../hooks/useCase'

import './styles.scss'

export default function NewIncident(){
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const { NewIncident} = useCase();

  const history = useHistory();

  async function handleNewIncident(e: FormEvent){
    e.preventDefault();

    NewIncident({title, description, value})
    history.push('/profile')
  }

  function Reset(e: FormEvent){
    e.preventDefault();
    setTitle('')
    setDescription('')
    setValue('')
  }


  
  
  return(
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadqastrar novo caso</h1>

          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>

          <Link className="back-link" to='/profile'>
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para a home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input placeholder="Título do caso" value={title} onChange={e => setTitle(e.target.value)}/>
          
          <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/>

          <input placeholder="Título do caso" value={value} onChange={e => setValue(e.target.value)}/>

          <div className="buttons">
          <button className='button cancel' onClick={Reset}>Cancel</button>
          <button className='button' type='submit'>Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}