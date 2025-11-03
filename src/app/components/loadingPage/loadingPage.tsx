interface LoadingPageProps {
  visible: boolean;
}

const LoadingPage = ({ visible }: LoadingPageProps) => {
  return (
    <div
      className={`fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 bg-white text-slate-900 transition-opacity duration-500 dark:bg-slate-950 dark:text-white ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="text-5xl font-semibold tracking-[0.45em] uppercase text-slate-900 dark:text-white">
          ntrio
        </span>
        <p className="max-w-xs text-sm text-slate-500 dark:text-slate-400">
          Crafting calm, considered web experiences.
        </p>
      </div>
      <div className="h-1 w-36 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <span className="loading-bar block h-full w-1/3 rounded-full bg-slate-900 dark:bg-white" />
      </div>
    </div>
  );
};

export default LoadingPage;
