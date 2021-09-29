import { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import { FiLogIn} from 'react-icons/fi'
import Modal from 'react-modal'

import { api } from "../../services/api";

import logoImg from '../../assets/logo.svg'
import heoresImg from '../../assets/background.png'

import './styles.scss';
import RegisterModal from "./RegisterModal";
import { Link } from "react-router-dom";

Modal.setAppElement("#root")

export default function Logon() {
  const [id, setId] = useState('');
  const [ registerModel, setRegisterModel] = useState(false)

  const history = useHistory();

  async function handleLogin(e: FormEvent){
    e.preventDefault()
    try {
      const response = await api.post('ongs/session', {id})

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name)
      history.push('/profile');
    } catch (error) {

    }
  }

  function handleOpenRegisterModel() {
    setRegisterModel(true)
  }

  function handleCloseRegisterModel(){
    setRegisterModel(false)
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
          {/* <Link className='button' to='/profile'>Entrar</Link> */}
          {<button className="button" type="submit">Entrar</button>}
          <span className='back-link'  onClick={handleOpenRegisterModel} >
            <FiLogIn size={16} color='#E02041' />
            Não tenho cadastro
          </span>
        </form>
      </section>
      <RegisterModal
        isOpen={registerModel}
        onRequestClose={handleCloseRegisterModel} />
      <img src={heoresImg} alt='Heroes' />
    </div>
  )
}