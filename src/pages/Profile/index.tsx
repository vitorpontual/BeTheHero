import Card from "../../components/Card";
import Header from "../../components/Header";

import './styles.scss'


export default function Profile() {
 

  const list = [
    {
      "id": "123123",
      "title": "Cadelinha atropelada",
      "value": 120,
      "description": "A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas."
    },
    {
      "id": "11111",
      "title": "Cadelinha atropelada",
      "value": 120,
      "description": "A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas."
    },

  ]


  return (
    <div className="profile-container">
      <Header ongName='Baby Baby Biruleibe' />
      <h1>Casos Cadastrados</h1>
      <ul>
        {list.map(data => (
          <Card key={data.id} incident={data} />
        ))}
      </ul>
    </div>
  )
}