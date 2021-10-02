import { createContext, FormEvent, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";


interface CaseProviderProps {
  children: ReactNode;
}

interface Incidents {
  id: string;
  title: string;
  description: string;
  value: number;
  ongId: string;

}

type IncidentsInput = Pick<Incidents, "title" |"description" | "value" >


interface CaseContextData {
  NewIncident: (data: IncidentsInput) => Promise<void>;
  Delete: (id: string) => void;
}

const CaseContext = createContext<CaseContextData>({} as CaseContextData);

export function CaseProvider({ children }: CaseProviderProps) {

  const ongId = localStorage.getItem('ongId')
 

  async function NewIncident(data: IncidentsInput)  {
    console.log(ongId)
    try{
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      })
    }catch(error){
      alert('Erro ao cadastrar o caso, tente novamente.')
    }
    
  }

  const Delete = async (id: string) => {
    try {
      await api.delete(`incidents/delete/${id}`, {
        headers: {
          Authorization: ongId
        }
      })

    } catch (error) {
      alert('Error ao deleter o caso, tente novamente')
    }
  }

  return (
    <CaseContext.Provider value={{ Delete, NewIncident }}>{children}</CaseContext.Provider>
  )
}

export function useCase(): CaseContextData {
  const context = useContext(CaseContext);

  return context
}