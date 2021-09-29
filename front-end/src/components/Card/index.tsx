import { FiTrash2 } from 'react-icons/fi'

import './styles.scss'

interface IncidentsProps {
  incident: {
    id: string;
    title: string;
    description: string;
    value: number;
  }
}

export default function Card(data: IncidentsProps) {


  return (
    <li className='card'>
      <strong>CASO:</strong>
      <p>{data.incident.title}</p>
      <strong>DESCRIÇÃO:</strong>
      <p>{data.incident.description}</p>
      <strong>VALOR:</strong>
      <p>{Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(data.incident.value)} reais</p>
      <button>
        <FiTrash2 size={20} color='#a8ab3' />
      </button>
    </li>
  )
}