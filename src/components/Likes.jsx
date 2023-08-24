import { useState } from "react"


export const Likes = () => {
    // Hooks //
    const [mg, setMg] = useState(0)

    // Render
  return (
    <>
    <h1>
    <button variant="primary" onClick={() =>{setMg(mg + 1)}}><h1>Likes 👍🏼</h1></button>
       {mg}
    </h1>
    </>
  )
}
