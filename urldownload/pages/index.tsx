import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import Button from '../components/Button'


const Home: NextPage = () => {

  const [download, setDownload] = useState('Download')

  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault() // Prevenindo o evento 
    setDownload('Baixando...')

    setTimeout(() => {
      setDownload('Download')
    }, 800)


    const fileInput = document.querySelector('input')
    fetchFile(fileInput?.value)
  }

  const fetchFile = (url: any) => {
    fetch(url).then(res => res.blob()).then(file => {
      //URL.createObject criando uma url do objecto que foi passado
      let temUrl = URL.createObjectURL(file)
      let aTag = document.createElement('a')
      aTag.href = temUrl // Passando o tempUrl como valor de  href para a tag <a> 

      aTag.download = 'file-download'

      document.body.appendChild(aTag) // adcionando a tag <a> dentro do body
      aTag.click() // clicando na tag <a> para baixar o arquivo
      aTag.remove()  // removendo a tag <a> depis de iniciar download
      URL.revokeObjectURL(temUrl) // removendo o tempURL do documento

    }).catch(() => {
      alert('Falha no download do arquivo!')
    })
  }

  return (
    <>
      <Head>
        <title>Download de arquivos via url</title>
        <meta name="description" content="Download de arquivos via url" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-amber-500">

        <div className="w-[500px] bg-white rounded-lg p-6 m-5 space-y-4 shadow-lg">
          <header>
            <h1 className="text-2xl font-bold mb-2">Arquivos Download{ }</h1>
            <p className="text-sm">Cole sua url de imagen, video ou pdf para realizar o download</p>
          </header>
          <form action="#">
            <input
              className="border-2 rounded-md w-full h-16 text-lg p-4" type="url" placeholder="Colar arquivo url"
              required />
            <Button handleDownload={handleDownload} download={download} />
          </form>

        </div>

      </div >

    </>
  )
}

export default Home
