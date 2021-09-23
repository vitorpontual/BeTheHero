import { useState } from "react"
import { useHistory } from "react-router";

import { api } from "../../services/api";

import logoImg from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import './styles.scss'


export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsAppNumber, setWhatsAppNumber] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('')

  const history = useHistory();

  async function handleRegister(e: any) {
    e.preventDefault();

    const data = {
      name, email, whatsAppNumber, city, uf
    }

    try {
      const response = await api.post('ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`)
      history.push('/');
    } catch (error) {
      alert('Erro no cadastro, tente novamente')
    }
  }
  return (
    <div className='register-container'>
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className='back-link' to='/'>
            <FiArrowLeft size={16} color='#E02041' />
            Voltar para o Logon
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input placeholder='Nome da ONG' value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
          <input placeholder='WhatsApp' value={whatsAppNumber} onChange={e => setWhatsAppNumber(e.target.value)} />
          <div className="input-group">
            <input placeholder='Cidade' value={city} onChange={e => setCity(e.target.value)} />
            <input placeholder='UF' value={uf} onChange={e => setUf(e.target.value)} />
          </div>
          <button className='button' type='submit'>Cadastrar</button>
        </form>
      </div>
    </div>
  )
}