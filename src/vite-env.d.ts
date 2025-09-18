/// <reference types="vite/client" />
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    textColor: string;
  }
}