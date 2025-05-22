
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/40 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
          </div>
        </div>
        
        <div className="mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm ">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center">

          </p>
        </div>
      </div>
    </footer>
  );
}