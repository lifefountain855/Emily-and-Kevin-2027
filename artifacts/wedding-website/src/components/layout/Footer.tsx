export function Footer() {
  return (
    <footer className="bg-muted/50 py-16 text-center border-t border-border/50">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl mb-4 text-primary">Emily & Kevin</h2>
        <p className="text-muted-foreground tracking-widest uppercase text-sm mb-8">
          January 25, 2027 • Salt Lake City, UT
        </p>

        <div className="max-w-md mx-auto mb-8 text-foreground/80">
          <p className="mb-2">Questions? We'd love to help.</p>
          <a
            href="mailto:kevinandemilysapp@gmail.com"
            className="text-primary hover:underline"
          >
            kevinandemilysapp@gmail.com
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          Built with love for our special day.
        </p>
      </div>
    </footer>
  );
}
