declare module 'next-themes' {
    import React from 'react';
  
    export interface ThemeProviderProps {
      attribute: string;
      children: React.ReactNode;
      defaultTheme?: string;
      forcedTheme?: string;
      enableSystem?: boolean;
      enableColorScheme?: boolean;
      storageKey?: string;
    }
  
    export const ThemeProvider: React.FC<ThemeProviderProps>;
  
    export interface UseThemeResult {
      theme: string | undefined;
      setTheme: (theme: string) => void;
      resolvedTheme: string | undefined;
      systemTheme: string | undefined;
    }
  
    export function useTheme(): UseThemeResult;
  }
  