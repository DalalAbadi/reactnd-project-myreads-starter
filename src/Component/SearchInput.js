
import React, { Component } from 'react';
import DebounceInput from 'react-debounce-input';

export default class SearchInput extends Component {
  render () {
    const {minLen, placeholderText,elementType} = this.props;
    const {props} = this
    return (
      <DebounceInput
        minLength={minLen}
        element={elementType}
        type="text"
        placeholder={placeholderText}
        onChange={(text) =>this.props.onChange({text})} />

    )
  }

}