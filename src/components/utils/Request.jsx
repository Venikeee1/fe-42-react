import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Request extends PureComponent {
  state = {
    data: null,
    error: null,
    loading: false,
  };

  async componentDidMount() {
    const { request } = this.props;
    this.setState({ loading: true });

    try {
      const data = await request();
      this.setState({ data });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { children } = this.props;
    const { data, error, loading } = this.state;

    return <>{children({ data, error, loading })}</>;
  }
}

Request.propTypes = {
  request: PropTypes.func,
};
