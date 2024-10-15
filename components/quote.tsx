import { Quote } from "lucide-react"

export default function CustomerQuote() {
  return (
    <div className="mx-auto sm:px-12 md:px-12 lg:px-24 xl:px-24 py-20 bg-background text-foreground">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-4 font-customFont">
          <Quote className="w-16 h-16 text-primary" />
          <blockquote className="space-y-4">
            <p className="text-5xl font-semibold leading-tight">
              Ylivertaisen helppo ja nopea palvelu kuljettaa autoja
            </p>
            <footer className="text-2xl text-muted-foreground">
              – Ostojohtaja, asiakasyritys
            </footer>
          </blockquote>
        </div>
        <div className="flex-1 bg-slate-400">
          <img 
            src="/placeholder.svg?height=400&width=400" 
            alt="Placeholder image" 
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  )
}