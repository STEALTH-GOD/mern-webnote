import {ZapIcon} from 'lucide-react';


const RateLimitedUI = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 shadow-md">
        <div className="flex flex-col md:flex-row items-center p-6">
          <div className="flex-shirnk-0 bg-primary/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
            <ZapIcon className="size-12 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2">Rate Limit Reached</h3>
              <p className="text-ltext-based-content mb-1">
                You've reached the maximum number of requests allowed. Please wait a moment before trying again.
              </p>
              <p className="text-l text-based-content/70">
                Try again in a few moments.
              </p>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default RateLimitedUI
