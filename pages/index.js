import { useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

function Home() {
  const [author, setAuthor] = useState(false)
  const [code, setCode] = useState(false)

  const maths = [
    {
      id: 1,
      math: 'Caminhando ao fim da tarde, uma senhora contou 19 casas em uma rua à sua direita. '
        + 'No regresso, ela contou 19 casas à sua esquerda. Quantas casas ela viu no total?',
      result: 19,
    },
    {
      id: 2,
      math: 'Há um pato entre dois patos, um pato atrás de um pato e um pato na frente de outro pato. De quantos patos estamos falando?',
      result: 3,
    },
    {
      id: 3,
      math: 'Meu avô tem 5 filhos, cada filho tem 3 filhos. Quantos primos eu tenho?',
      result: 12,
    },
    {
      id: 4,
      math: 'Um pequeno caminhão pode carregar 50 sacos de areia ou 400 tijolos. '
        + 'Se foram colocados no caminhão 32 sacos de areia, quantos tijolos pode ainda ele carregar?',
      result: 144,
    },
    {
      id: 5,
      math: 'Um celular e sua capinha custam R$ 610. O celular custa 600 reais a mais que a capinha. Quanto custa o celular?',
      result: 605,
    },
    {
      id: 6,
      math: 'Em apenas 2 anos terei o dobro da idade que tinha há 5 anos. Quantos anos eu tenho?',
      result: 12,
    },
  ]

  function handleAuthor(e) {
    if (e.target.value.toLowerCase() == 'iksnimel oluap') {
      console.log('acertou!')
      setAuthor(!author)
    }
  }
  function handleCode(e) {
    if (e.target.value.toLowerCase() == '0795') {
      console.log('acertou!')
      setCode(!code)
    }
  }

  function getSomeMath() {
    return maths[Math.floor(Math.random() * maths.length)]
  }

  const AuthorComponent = () => (
    <div className={styles.field}>
      <input
        className={styles.input}
        type='text'
        placeholder="Autor do link que te trouxe aqui ( de trás pra frente )"
        onChange={
          (text) => handleAuthor(text)
        }
      />
      <div className={styles.line} />
    </div>
  )

  const MathComponent = () => (
    <div className={styles.math_container}>
      <span className={styles.math_title}>
        SUA CHARADA
      </span>
      <br />
      <br />
      <div className={styles.math_content}>
        <span>
          {getSomeMath().math}
        </span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <span className={styles.code_label}>
        Responda com a soma das respostas de todas as charadas.
      </span>
      <input
        maxLength={4}
        type='text'
        placeholder="Soma"
        className={styles.code_input}
        onChange={
          (text) => handleCode(text)
        }
      />
    </div>
  )
  // iksnimel oluap

  const QRCodeComponent = () => (
    <div className={styles.field}>
      <Image
        src="/qrcode.png"
        alt="QRCode"
        width={400}
        height={400}
      />
    </div>
  )

  const Comeback = () => (
    <div className={styles.comeback}>
      <h1>Volte Amanhã</h1>
    </div>
  )

  return (
    <>
      { !author && !code ? <AuthorComponent /> : null}
      { author && !code ? <MathComponent /> : null}
      { code ? <Comeback /> : null}
      {/* { code ? <QRCodeComponent /> : null} */}
    </>
  )
}

export default Home