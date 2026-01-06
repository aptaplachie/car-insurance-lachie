interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

export function ProgressBar({ currentStep, totalSteps, steps }: ProgressBarProps) {
  return (
    <div className="mb-6 sm:mb-8">
      <div className="flex justify-between mb-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex-1 text-center text-xs sm:text-sm font-medium transition-colors ${
              index + 1 <= currentStep ? 'text-purple-700' : 'text-gray-400'
            }`}
          >
            <span className="hidden sm:inline">{step}</span>
            <span className="sm:hidden">{index + 1}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-1.5 sm:gap-2">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`flex-1 h-1.5 sm:h-2 rounded-full transition-colors ${
              index + 1 <= currentStep ? 'bg-purple-700' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
      <p className="text-center text-xs sm:text-sm text-gray-500 mt-2">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
}
