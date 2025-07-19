declare module 'aos' {
  const AOS: {
    init: (config?: Record<string, unknown>) => void;
    refresh: () => void;
    refreshHard: () => void;
  };
  export default AOS;
} 