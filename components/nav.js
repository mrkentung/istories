import Link from 'next/link'

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function Nav() {
  return (
    <nav className="container mx-auto">
      <ul className="flex justify-between items-center p-6">
        <li>
          <Link href="/">
            <a className="text-lg font-bold mr-6">Stories</a>
          </Link>
          <span className="text-sm font-regular text-gray-700">Story from another world</span>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          <li>
            <a href="" className="no-underline text-sm text-gray-600 hover:text-gray-900 transition duration-500 ease-in-out">
              Blog
            </a>
          </li>
          <li>
            <a href="" className="no-underline text-sm text-gray-600 hover:text-gray-900 transition duration-500 ease-in-out">
              About
            </a>
          </li>
          <li>
            <a href="" className="no-underline text-sm text-gray-600 hover:text-gray-900 transition duration-500 ease-in-out">
              Contact
            </a>
          </li>
          <li>
            <a href="" className="no-underline text-sm text-gray-600 hover:text-gray-900 transition duration-500 ease-in-out">
              Write
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  )
}
