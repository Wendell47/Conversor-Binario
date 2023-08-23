import { useState } from 'react'
import { Main,Content, ResultContent, NoResult } from './styles'
import Logo from '../components/Logo'
import Input from '../components/Input'
import Footer from '../components/footer'
import { LuArrowLeftRight } from 'react-icons/lu'
function App() {

  const [value,setValue]=useState()
  const [result,setResult]=useState()

  function handleSubmit(e){
    e.preventDefault()
    //let calc
    parseInt(value)

    setResult(value)
  
    setValue('')
  }

  function convertToBinary1 (e) {
    e.preventDefault()

    let num = value;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }

    setResult(binary)

    console.log(binary);
}

  console.log(result)
  console.log(parseInt(value))
  return (
    <>
      <Main>
       <Logo/>

        <Content>
          <h2> Decimal  <LuArrowLeftRight/> binário </h2>
          <p>Olá caro visitante, digite um número abaixo para efetuar a conversão:</p>
          <Input
          placeholder="exemplo: 1000"
          value={value}
          onChange={e => setValue(e.target.value)}
          onClick={convertToBinary1}
          />
          <ResultContent>
            
            {
              result ?
             <>
              <h2>Resultado</h2>
              <p>{result}</p>
             </>
              :
              <NoResult>
                1010<br/>0101
              </NoResult>
            }
          </ResultContent>
        </Content>

        <Footer/>
      </Main>

      
    </>
  )
}

export default App
