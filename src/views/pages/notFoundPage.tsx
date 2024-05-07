import React, { Fragment } from 'react';
import { useIntl } from 'react-intl';

export const NotFoundPage : React.FC = () => {
    const {formatMessage} = useIntl();

    return <Fragment>
        {formatMessage({id:"not_found_page"})}
    </Fragment>
}