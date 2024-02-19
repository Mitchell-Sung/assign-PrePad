import { Component } from 'react';

type Props = {
    fallback: JSX.Element;
    children?: JSX.Element;
};

class ErrorBoundary extends Component<Props> {
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
