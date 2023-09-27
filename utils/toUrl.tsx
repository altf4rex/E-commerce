
const toUrl = (id: string, url?: string) => {
  return `http://127.0.0.1:8090/api/files/products/${id}/${url}`
}

export default toUrl