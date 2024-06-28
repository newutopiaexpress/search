import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: "Collect information about technological singularity",
    message: "What is technological singularity, and how does it affect the future of humanity?"
  },
  {
    heading: 'Summarize this video for a blog post',
    message: 'Summarize this video for a blog post'
  },
  {
    heading: 'Im looking for a black shirt with skull pattern',
    message: 'black shirt with skull pattern'
  },
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-transparent p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground opacity-50" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
