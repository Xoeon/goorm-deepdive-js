const dateFormatter = (value) => {
  const date = new Date(value)

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
}

export default dateFormatter
