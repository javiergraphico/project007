import { Modal } from "./Modal"
import { useState } from "react"

export const Modales = () => {

  const[mostrar, setMostrar] = useState(false)

  return (
    <section className="container mt-5">
      <h2>Modales</h2>
      <button className="btn btn-success" onClick={() => setMostrar(true)}>Ver Modal</button>
      <Modal isOpen={mostrar} onClose={() => setMostrar(false)} />
    </section>
  )
}
