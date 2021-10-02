import { Link, useHistory } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import './styles.scss'

interface ongProps {
  ongName: string;
}

export default function Header({ongName}: ongProps) {
  const history = useHistory();

  async function handlerLogout() {
    localStorage.clear();
    history.push('/')
  }

  
  return(
    <header>
      <img src={logoImg} alt="Be The Hero" />
      <span>Bem vindo, {ongName}</span>

      <Link className='button' to='/incidents/new' >Cadastra novo Incidente</Link>
      <button onClick={handlerLogout} type='button'>
        <FiPower size={18} color="#E02041" />
      </button>
    </header>
  )
}