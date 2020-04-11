import { useLocation } from 'react-router-dom'

// Criar um menu no mobile
export const routesArray = ['/', 'InitHooks', 'ReactMemo']

export function useQuery() {
    return new URLSearchParams(useLocation().search);
  }