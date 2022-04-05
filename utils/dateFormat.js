const dateOptions = {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
}

export default (currentDate = new Date()) => {
  try {
    return new Date(currentDate).toLocaleDateString('es-CL', dateOptions)
  } catch (err) {
    return currentDate
  }
}