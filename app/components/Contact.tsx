import { siteConfig } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-surface px-4 py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-red">Contact Us</span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Have a question about shipping or need a custom quote? Send us a message and our
            team will get back to you.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-8 sm:mt-12 sm:gap-12 lg:grid-cols-2">
          <form action={`mailto:${siteConfig.contactEmail}`} method="post" encType="text/plain" className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1.5 w-full border border-border bg-white px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1.5 w-full border border-border bg-white px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1.5 w-full border border-border bg-white px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand-red py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-red/90 sm:w-auto sm:px-10"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Email</h3>
              <a href={`mailto:${siteConfig.contactEmail}`} className="mt-2 block break-all text-base text-muted hover:text-brand-red sm:text-lg">
                {siteConfig.contactEmail}
              </a>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Phone</h3>
              <a href={`tel:${siteConfig.contactPhone.replace(/\D/g, "")}`} className="mt-2 block text-lg text-muted hover:text-brand-red">
                {siteConfig.contactPhone}
              </a>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Address</h3>
              <p className="mt-2 text-lg leading-relaxed text-muted">
                123 Logistics Way, Suite 100
                <br />
                Shipping City, SC 12345
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Business Hours</h3>
              <p className="mt-2 text-lg text-muted">
                Monday – Friday: 8:00 AM – 6:00 PM
                <br />
                Saturday: 9:00 AM – 1:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
