import React from 'react'
import Spinner from './Spinner'
import PersonajeItem from './PersonajeItem'

export const PersonajesGrid = ({items,isLoading}) => {
  return isLoading ? ( 
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => {
        return <PersonajeItem key={item.char_id} item={item} />
      })}
    </section>
  )
}

export default PersonajesGrid