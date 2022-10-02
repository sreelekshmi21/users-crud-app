import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Toolbar } from '@mui/material';
import { FilterContext } from 'react-admin';
import { PostFilterForm } from './PostFilterForm';

const SSListToolbar = (props) => {
const { filters, actions, className, ...rest } = props;

console.log('#LIST,filters',filters)

return <FilterContext.Provider value={filters}>
           
                <PostFilterForm filters={filters} />
                <span />
                {actions &&
                    React.cloneElement(actions, {
                        ...rest,
                        ...actions.props,
                    })}
            
        </FilterContext.Provider>

}



export default SSListToolbar;