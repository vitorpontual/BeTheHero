import { createContext, FormEvent, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";


interface CaseProviderProps {
  children: ReactNode;
}

interface Incidents {
  id: string;
  title: string;
  description: string;
  value: string;

}

type IncidentsInput = Pick<Incidents, "title" |"description" | "value">


interface CaseContextData {
  incidents: Incidents[];
  NewIncident: (data: IncidentsInput) => void;
  Delete: (id: string) => void;
}

const CaseContext = createContext<CaseContextData>({} as CaseContextData);

export function CaseProvider({ children }: CaseProviderProps) {
  const [incidents, setIncidents] = useState<Incidents[]>([])

  const ongId = localStorage.getItem('ongId')

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data);
    });
  }, [ongId]);

  const NewIncident = async (data: IncidentsInput) => {

    try{
      await api.post('incidents', data, {
        headers: {
          Autorizaton: ongId
        }
      })
    }catch(error){
      alert('Erro ao cadastrar o caso, tente novamente.')
    }
    
  }

  const Delete = async (id: string) => {
    try {
      await api.delete(`incident/${id}`, {
        headers: {
          Authorizatoin: ongId
        }
      })
      const incidentRemove = incidents.filter(incident => incident.id !== id)

      setIncidents(incidentRemove)
    } catch (error) {
      alert('Error ao deleter o caso, tente novamente')
    }
  }

  return (
    <CaseContext.Provider value={{ incidents, Delete, NewIncident }}>{children}</CaseContext.Provider>
  )
}

export function useCase(): CaseContextData {
  const context = useContext(CaseContext);

  return context
}