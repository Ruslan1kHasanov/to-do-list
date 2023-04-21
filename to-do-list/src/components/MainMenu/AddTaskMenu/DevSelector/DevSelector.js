import React from 'react';
import Select from 'react-select';


class DevSelector extends React.Component {
  
  state = {
    selected_option: this.props.selected_dev_arr,
  };

  handleChange = (selected_option) => {
    this.setState({ selected_option }, () =>{
      // console.log(`Option selected:`, this.state.selected_option);
      this.props.add_new_dev(selected_option);
    }
    );
  };

  render() {
    const { selected_option } = this.state;
    // console.log(this.props);
    return (
      <Select
        value={selected_option}
        onChange={this.handleChange}
        options={this.props.dev_proj_list}
        isMulti={true}
      />
    );
  }
}


export default DevSelector;