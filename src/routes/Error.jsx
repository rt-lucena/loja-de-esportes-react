import { ErrorWrapper, ErrorMessage, ErrorDescription } from '../css/ErrorWrapper';

const Error = () => {
    return (
        <ErrorWrapper>
            <ErrorMessage>404 - Page Not Found !!!</ErrorMessage>
            <ErrorDescription>Sorry, the page you are looking for does not exist.</ErrorDescription>
        </ErrorWrapper>
    );
}

export default Error;
