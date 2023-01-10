import React from 'react'

//con ayuda de memo puedo memorizar un componene para no renderizarlo hasta que la propiedades(propertys) cambien

export const Small = React.memo(( { value } ) => {

    console.log('me volvi a llamar :( ')

  return (
    <small>{value}</small>
  )
})
