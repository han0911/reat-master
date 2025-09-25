import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
  type DefaultTheme,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";
import App from "./App";
import { Dark } from "./components/atoms";

const G = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}

*[hidden] {
  display: none;
}

body {
  line-height: 1;
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textColor};  
}

menu, ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}
blockquote::before, blockquote::after,
q::before, q::after {
  content: '';
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}
`;
export const darktheme: DefaultTheme = {
  textColor: "#f5f6fa",
  background: "#2f3640",
  accentColor: "#4cd137",
};

export const lightTheme: DefaultTheme = {
  textColor: "#2f3640",
  background: "#f5f6fa",
  accentColor: "#4cd137",
};

const query = new QueryClient();

// ✅ Recoil 상태를 사용하고 테마를 적용하는 새로운 컴포넌트
function AppWithTheme() {
  const dark = useRecoilValue(Dark); // RecoilRoot 안쪽에 있으므로 정상적으로 동작합니다.
  return (
    <ThemeProvider theme={dark ? darktheme : lightTheme}>
      <G />
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeProvider>
  );
}

// ✅ 최상위 컴포넌트는 Provider들만 설정하는 역할을 합니다.
function Main() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={query}>
        <AppWithTheme />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
