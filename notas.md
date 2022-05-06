## Formatear número para colocar en moneda

`` const amountFormat = (amount) => {
      return amount.toLocaleString('en-US', {
         style: 'currency',
         currency: 'USD'
      })
   }

   {amountFormat(amount)}

``

* Recordar limpiar el state luego de ejecutar las acciones
* No se pueden almacenar arreglos en localStorage, hay que convertilos en un string con `` JSON.stringify(arreglo) ?? []``

### Guardando arreglos en localStorage
``
useEffect(() => {
   localStorage.setItem('asignamos nombre al arreglo', JSON.stringify(arreglo) ?? [])
}, [arreglo])
``