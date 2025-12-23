interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

export function ProgressBar({ currentStep, totalSteps, steps }: ProgressBarProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex-1 text-center text-sm font-medium ${
              index + 1 <= currentStep ? 'text-blue-600' : 'text-slate-400'
            }`}
          >
            <span className="hidden sm:inline">{step}</span>
            <span className="sm:hidden">{index + 1}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`flex-1 h-2 rounded-full transition-colors ${
              index + 1 <= currentStep ? 'bg-blue-600' : 'bg-slate-200'
            }`}
          />
        ))}
      </div>
      <p className="text-center text-sm text-slate-500 mt-2">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
}
