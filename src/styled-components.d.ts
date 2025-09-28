// src/styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    cardcolor:string;
    boardcolor:string
  }
}
