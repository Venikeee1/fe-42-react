import { Component } from 'react';
import { Container } from './Container';
import { Button } from './ui/Button';

export class Home extends Component {
  state = {
    title: 'FE-42 the best',
    buttonColor: 'primary',
  };

  handleButtonColorChange = () => {
    this.setState((prevState) => {
      const isPrimary = prevState.buttonColor === 'primary';

      return {
        buttonColor: isPrimary ? 'alert' : 'primary',
      };
    });
  };

  render() {
    const { buttonColor, title } = this.state;

    return (
      <main className="main">
        <Container>
          <h1>{title}</h1>
          <Button color={buttonColor} onClick={this.handleButtonColorChange}>
            Click me
          </Button>
        </Container>
      </main>
    );
  }
}
