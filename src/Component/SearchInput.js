
import React from 'react';
import DebounceInput from 'react-debounce-input';

export default function  SearchInput (props){

    return (
      <DebounceInput
        minLength={props.minLen}
        element={props.elementType}
        type="text"
        placeholder={props.placeholderText}
        onChange={(text) =>props.onChange({text})} />

    )


}