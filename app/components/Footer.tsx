import Link from "next/link"

const links = [
  {name: "Work", href: "#work"},
  {name: "Services", href: "#about"},
  {name: "Contact", href: "#contact"},
  {name: "Privacy", href: "#privacy"},  
  {name: "Terms", href: "#terms"},
]

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {links.map((link) => (
            <div key={link.name} className="pb-6">
              <Link
                href= {link.href}
                className="text-sm leading-6 text-muted-foreground hover:text-foreground"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-sm leading-5 text-muted-foreground">
        © 2025 Barny’s Web Builders. All rights reserved.</p>
      </div>
    </footer>
  )
}
