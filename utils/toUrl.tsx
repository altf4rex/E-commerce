
const toUrl = (id: string, url?: string) => {
  return `https://ecom-branch.pockethost.io/api/files/products/${id}/${url}`
}
console.log(toUrl)
export default toUrl