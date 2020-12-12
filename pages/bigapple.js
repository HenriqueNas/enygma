
import styles from './styles.module.css'

function Apple() {

  const emails = [
    'adriana.lima',
    'alvaro.madela',
    'amanda.noveletto',
    'amanda.eing',
    'ana.pinheiro',
    'andre.tolardo',
    'ariele.berkenbrock',
    'arino.souza',
    'bianca.schneider',
    'bruno.santana',
    'caio.will',
    'camila.lenz',
    'candice.almeida',
    'carolina.meurer',
    'caroline.antonello',
    'caroline.alves',
    'caroline.fachini',
    'daiara.souza',
    'dan.prada',
    'daniel.rogoski',
    'eduardo.ancini',
    'eduardo.woloszyn',
    'felipe.xavier',
    'felipe.maier',
    'fernanda.erahardt',
    'francisco.jose',
    'gabriel.frontorio',
    'giovanna.miguel',
    'helton.eissmann',
    'isabelle.langkammer',
    'jean.silva',
    'kayanne.barros',
    'kelly.mathias',
    'lenilson.porath',
    'lizandra.piedade',
    'lucio.beirao',
    'maicon.schelter',
    'marco.butzke',
    'marina.silva',
    'mateus.cruz',
    'mateus.scherer',
    'matheus.mello',
    'priscila.zwang',
    'rafael.moreira',
    'romario.melo',
    'ruan.euler',
    'thiago.farias',
    'yan.gomes',
  ]

  const EmailInputComponent = () => {
    return (
      <div className={styles.form_group}>
        <input className={styles.form_field} type="email" placeholder="Email" />
        <span className={styles.span}>@effecti.com.br</span>
      </div>
    )
  }

  return (
    <>
      { <EmailInputComponent />}
    </>
  )
}

export default Apple