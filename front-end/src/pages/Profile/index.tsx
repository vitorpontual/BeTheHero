import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Card from "../../components/Card";
import Header from "../../components/Header";
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


  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  const history = useHistory();

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data);
    });
  }, [ongId]);



  return (
    <div className="profile-container">
      <Header ongName={ongName as string} />
      <h1>Casos Cadastrados</h1>
      <ul>
        {incidents.map(data => (
          <Card key={data.id} incident={data} />
        ))}
      </ul>
    </div>
  )
}