import { FiTrash2 } from 'react-icons/fi'

import './styles.scss'

interface IncidentsProps {
  incident: {
    id: string;
    title: string;
    description: string;
    value: number;
  }
  handlerDelete: (id: string) => void;
}

export default function Card({incident, handlerDelete}: IncidentsProps) {


  return (
    <li className='card'>
      <strong>CASO:</strong>
      <p>{incident.title}</p>
      <strong>DESCRIÇÃO:</strong>
      <p>{incident.description}</p>
      <strong>VALOR:</strong>
      <p>{Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(incident.value)} reais</p>
      <button onClick={() => handlerDelete(incident.id)}>
        <FiTrash2 size={20} color='#a8ab3' />
      </button>
    </li>
  )
}