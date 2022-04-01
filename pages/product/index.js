import Link from 'next/link'

export default function index({products}) {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <div key={product.id}>
            <li>{product.price} Tk</li>
            <li>{product.title}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()

  return {
    props: {
      products,
    },
  }
}
