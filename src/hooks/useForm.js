import queryString from "query-string";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useForm = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( inputValue.trim().length === 0 ) return;

        navigate(`?q=${ inputValue.toLocaleLowerCase().trim() }`);
        setInputValue('');
    };

    return {
        onInputChange,
        onSubmit,
        inputValue,
        q,
    }
}