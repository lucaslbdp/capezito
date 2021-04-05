import React from 'react'

const ErrorsApi = (props) => {

    const { error } = props;
    let errors = [];

    if (typeof error === 'string') {
        errors.push(error);
    }

    if (Array.isArray(error)) {
        errors = error;
    }

    return (
        <ul>
            {
                errors.map((data, i) => <li className='text-danger' key={i}>{data}</li>)
            }
        </ul>
    )
}

export default ErrorsApi;