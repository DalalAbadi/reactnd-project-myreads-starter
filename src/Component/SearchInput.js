

import DebounceInput from 'react-debounce-input';

export default class SearchInput extends Component {
  render () {

    return (
      <DebounceInput
        minLength={2}
        element="input"
        type="text"
        placeholder="Search by title "
        onChange={this.searchFor}/>

    )
  }

}