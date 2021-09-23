import { useState } from "react";
import { useHistory } from "react-router";
import { FiLogIn} from 'react-icons/fi'
import { Link } from "react-router-dom";

import { api } from "../../services/api";

import logoImg from '../../assets/logo.svg'
import heoresImg from '../../assets/background.png'

import './styles.scss';


export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(e: any){
    e.preventDefault()
    try {
      const response = await api.post('session', {id})

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name)
      history.push('/profile');
    } catch (error) {

    }
  }

  return(
    <div className='logon-container'>
      <section className='form'>
        <img src={logoImg} alt='Be The Hero' />

        <form onSubmit={handleLogin}>
          <input 
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>
          <Link className='back-link' to='/register'>
            <FiLogIn size={16} color='#E02041' />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heoresImg} alt='Heroes' />
    </div>
  )
}