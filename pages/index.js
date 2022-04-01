import Link from "next/link";

export default function index() {
  return (
    <div>
      home page
      <br/>
      <Link href='/blog'><a className="btn btn-danger">Blog</a></Link>
    </div>
  )
}
