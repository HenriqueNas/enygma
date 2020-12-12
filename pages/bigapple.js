import { useState } from 'react'
import styles from './styles.module.css'

function Apple() {
  const [email, setEmail] = useState(false)
  const [time, setTime] = useState('')
  const [name, setName] = useState('')

  const emails = [
    {
      email: 'adriana.lima',
      time: '8:30'
    },
    {
      email: 'alvaro.madela',
      time: '8:30'
    },
    {
      email: 'amanda.noveletto',
      time: '8:45'
    },
    {
      email: 'amanda.eing',
      time: '8:45'
    },
    {
      email: 'ana.pinheiro',
      time: '9:00'
    },
    {
      email: 'andre.tolardo',
      time: '9:00'
    },
    {
      email: 'ariele.berkenbrock',
      time: '9:15'
    },
    {
      email: 'arino.souza',
      time: '9:15'
    },
    {
      email: 'bianca.schneider',
      time: '9:30'
    },
    {
      email: 'bruno.santana',
      time: '9:30'
    },
    {
      email: 'caio.will',
      time: '9:45'
    },
    {
      email: 'camila.lenz',
      time: '9:45'
    },
    {
      email: 'carolina.meurer',
      time: '10:00'
    },
    {
      email: 'caroline.antonello',
      time: '10:00'
    },
    {
      email: 'caroline.fachini',
      time: '10:30'
    },
    {
      email: 'daiara.souza',
      time: '10:30'
    },
    {
      email: 'dan.prada',
      time: '10:45'
    },
    {
      email: 'daniel.rogoski',
      time: '10:45'
    },
    {
      email: 'eduardo.ancini',
      time: '11:00'
    },
    {
      email: 'felipe.xavier',
      time: '11:00'
    },
    {
      email: 'felipe.maier',
      time: '11:15'
    },
    {
      email: 'fernanda.erahardt',
      time: '11:15'
    },
    {
      email: 'francisco.jose',
      time: '11:30'
    },
    {
      email: 'gabriel.frontorio',
      time: '11:30'
    },
    {
      email: 'giovanna.miguel',
      time: '11:45'
    },
    {
      email: 'helton.eissmann',
      time: '11:45'
    },
    {
      email: 'romario.melo',
      time: '11:45'
    },
    {
      email: 'isabelle.langkammer',
      time: 'nan'
    },
    {
      email: 'jean.silva',
      time: '13:45'
    },
    {
      email: 'kayanne.barros',
      time: '14:00'
    },
    {
      email: 'kelly.mathias',
      time: '14:00'
    },
    {
      email: 'lizandra.piedade',
      time: 'nan'
    },
    {
      email: 'yan.gomes',
      time: '14:15'
    },
    {
      email: 'lucio.beirao',
      time: '14:15'
    },
    {
      email: 'maicon.schelter',
      time: '14:30'
    },
    {
      email: 'marco.butzke',
      time: '14:30'
    },
    {
      email: 'marina.silva',
      time: '14:45'
    },
    {
      email: 'mateus.cruz',
      time: '14:45'
    },
    {
      email: 'henrique.nascimento',
      time: '15:00'
    },
    {
      email: 'rodrigo.cachoeira',
      time: '15:00'
    },
    {
      email: 'mateus.scherer',
      time: '15:15'
    },
    {
      email: 'matheus.mello',
      time: '15:15'
    },
    {
      email: 'priscila.zwang',
      time: '15:30'
    },
    {
      email: 'rafael.moreira',
      time: 'nan'
    },
    {
      email: 'ruan.euler',
      time: '15:30'
    },
    {
      email: 'thiago.farias',
      time: '16:00'
    },
  ]

  const handleEmail = (email) => {
    email = email.target.value.toLowerCase()
    const person = emails.filter(pessoa => pessoa.email == email).shift();
    if (!!person) {
      const name = person.email.split('.').shift()
      setTime(person.time)
      setName(name)
      setEmail(true)
    }
  }

  const EmailInputComponent = () => {
    return (
      <div className={styles.form_group}>
        <input
          className={styles.form_field}
          type="email"
          placeholder="Email"
          onChange={
            (text) => handleEmail(text)
          }
        />
        <span className={styles.span}>@effecti.com.br</span>
      </div>
    )
  }

  const TimeComponent = () => {
    return (
      <div className={styles.time_container}>
        <span className={styles.time_text}>
          Parabéns! Você provou ser incrível.
          <br />
          <br />
          Vá amanhã às {time}, na Effecti, para retirar seu prêmio!!
          <br />
          <br />
          Estamos no aguardo.
        </span>
        <br />
        <br />
        <hr />
        <br />
        <span className={styles.time}>
          Sexta-Feira (18/12) às {time}
        </span>
        <br />
        <br />
        <span className={styles.sub}>
          <i>esse horário é exclusivo seu {name}</i>
        </span>
      </div>
    )
  }

  return (
    <>
      { !email ? <EmailInputComponent /> : null}
      { email ? <TimeComponent /> : null}
    </>
  )
}

export default Apple