import Meta from './Meta';
import GlobalStyle from '../styles/GlobalStyle';

const Page = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Meta />
      {children}
    </>
  );
};

export default Page;
