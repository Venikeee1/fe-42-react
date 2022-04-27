import { Container } from './Container';

export const Home = () => {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = isDarkMode ? 'dark' : 'light';

  return (
    <main className="main">
      <Container>
        <h1>This is {theme} mode</h1>
      </Container>
    </main>
  );
};
