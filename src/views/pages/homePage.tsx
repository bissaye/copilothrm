import React, { Fragment } from 'react';
import { useIntl } from 'react-intl';

export const HomePage : React.FC = () => {
    const {formatMessage} = useIntl();

    return <Fragment>
        {formatMessage({id:"home_Page"})}
    </Fragment>
}