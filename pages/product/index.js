import Link from 'next/link'

export default function index() {
  return (
    <div>
        <h4> <Link href='/product/1'> product1 </Link> </h4>
        <h4> <Link href='/product/2'> product2 </Link> </h4>
        <h4> <Link href='/product/3'> product3 </Link> </h4>
    </div>
  )
}
