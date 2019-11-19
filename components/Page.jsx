import Meta from './Meta';
import GlobalStyle from '../styles/GlobalStyle';

export default ({ children }) => {
  return (
    <div className="page">
      <GlobalStyle />
      <Meta />
      {children}
    </div>
  );
};
