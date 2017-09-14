import * as React from 'react';
import Link from './link';
import FilterTypes from '../../../constants/FilterTypes';

export default () => {
    return (
        <p className="filters">
            <Link filter={FilterTypes.ALL}> {FilterTypes.ALL} </Link>
            <Link filter={FilterTypes.COMPLETED}>
                {' '}
                {FilterTypes.COMPLETED}{' '}
            </Link>
            <Link filter={FilterTypes.UNCOMPLETED}>
                {' '}
                {FilterTypes.UNCOMPLETED}{' '}
            </Link>
        </p>
    );
};
