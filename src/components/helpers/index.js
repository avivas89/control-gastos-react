export const generateId = () => {
   const random = Math.random().toString(36).substring(2)
   const dateDay = Date.now().toString(36)
   return random + dateDay
}

export const formatDate = day => {
   const newDay = new Date(day)
   const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
   }

   return newDay.toLocaleDateString('es-ES', options)
}