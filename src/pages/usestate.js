import { useState } from "react"

export default function Usestate(){
    const [state, setState] = useState(0)
    return<>
    <h1 className="text-center">Bem vindo a Use State</h1>
    Cliques {state} vezes
    <button className="btn btn-dark" onClick={() => setState(soma1(state))}>Clique aqui</button>
    </>
}   function soma1(state){
    state++
    setTimeout(() => {
        return state
    }, 1000);
    
}