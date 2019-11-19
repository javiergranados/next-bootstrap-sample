import Meta from './Meta';
import GlobalStyle from '../styles/GlobalStyle';

export default ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Meta />
      {children}
    </>
  );
};
