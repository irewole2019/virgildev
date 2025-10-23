import { COPY } from "@/lib/copy"

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-accent" />
              <span className="text-xl font-bold text-foreground">{COPY.brand.name}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">{COPY.brand.tagline}</p>
            <p className="text-xs text-muted-foreground">{COPY.brand.offer}</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {COPY.footer.links.product.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {COPY.footer.links.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">© 2025 {COPY.brand.company}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
