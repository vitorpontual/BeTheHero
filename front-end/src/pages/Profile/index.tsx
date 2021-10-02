import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { useCase } from "../../hooks/useCase";
import { api } from "../../services/api";

import './styles.scss'

interface Incidents {
  id: string;
  title: string;
  description: string;
  value: number;
}


export default function Profile() {
  const [incidents, setIncidents] = useState<Incidents[]>([])
  const {Delete} = useCase();

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  const history = useHistory();

  useEffect(() => {
    api.get('incidents', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data);
    });
  }, [ongId]);

  async function handlerDeleteIncident(id: string) { 
    Delete(id)

    setIncidents(incidents.filter(incident => incident.id !== id))
  }



  return (
    <div className="profile-container">
      <Header ongName={ongName as string} />
      <h1>Casos Cadastrados</h1>
      <ul>
        {incidents.map(data => (
          <Card key={data.id} incident={data} handlerDelete={handlerDeleteIncident} />
        ))}
      </ul>
    </div>
  )
}