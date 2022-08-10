import React from "react";
import { useState } from "react";
import { Container } from "./styled";

export function CalculoMedia() {
  const [valor_um, setValorUm] = useState<number>(0);
  const [valor_dois, setValorDois] = useState<number>(0);

  const [media, setMedia] = useState<number>(0);

  const handleValorUm = (e: any) => {
    console.log(e.target.value);
    setValorUm(Number(e.target.value));
  }

  const handleValorDois = (e: any) => {
    setValorDois(Number(e.target.value));
  }

  function handleCalculoMedia(event: Event) {
    event.preventDefault();
    setValorUm(0);
    setValorDois(0);

    let media = (valor_um + valor_dois) / 2;

    setMedia(media);
  }

  return (
    <Container>
      <form onSubmit={(e: any) => {handleCalculoMedia(e)}} >
        <input 
          type="text" 
          placeholder="Digite um número"
          onChange={(e: any)=> {handleValorUm(e)} }
        />
        <input 
          type="text" 
          placeholder="Digite um número"
          onChange={(e: any)=> {handleValorDois(e)}} 
        />

        <input type="submit" id="calcular" value="Cálcular Média" />
      </form>

      <div className="resultado">
        {
          media > 5 ? "Você foi aprovado" : "Você foi reprovado" 
        }
      </div>
    </Container>
  );
}