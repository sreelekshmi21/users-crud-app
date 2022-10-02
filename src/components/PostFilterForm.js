import * as React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Box, Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { TextInput, NullableBooleanInput, useListContext, FilterFormBase, useResourceContext } from 'react-admin';

export const PostFilterForm = (props) => {
    const {
        displayedFilters,
        filterValues,
        setFilters,
        hideFilter
    } = useListContext();

    const form = useForm({
        defaultValues: filterValues,  
    });

    if (!displayedFilters.main) return null;

    console.log('#LIST',filterValues)

    const onSubmit = (values) => {
        if (Object.keys(values).length > 0) {
            setFilters(values);
        } else {
            hideFilter("main");
        }
    };

    const resetFilter = () => {
        setFilters({}, []);
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <Box display="flex" alignItems="flex-end" mb={1}>
            <Box component="span" mr={2}>
            <TextInput
                        resettable
                        helperText={false}
                        source="q"
                        label="Search"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <SearchIcon color="disabled" />
                                </InputAdornment>
                            )
                        }}
                        alwaysOn
                    />
                </Box>
                <Box component="span" mr={2}>
                    {/* Commentable filter */}
                    <NullableBooleanInput
                        helperText={false}
                        source="commentable"
                    />
                </Box>
                <Box component="span" mr={2} mb={1.5}>
                    <Button variant="outlined" color="primary" type="submit">
                        Filter
                    </Button>
                </Box>
            </Box>
        </form>
    );
};