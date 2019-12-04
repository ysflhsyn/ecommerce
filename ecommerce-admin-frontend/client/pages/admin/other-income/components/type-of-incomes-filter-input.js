import React from "react";
import api from "../../../../api";
import AsyncSelect from "react-select/lib/Async";
import { displayName } from "../../../../helpers";

//let timeout = false;
export const dataToSelectOptions = data => {
    return data.map(t => ({
        value: t.id,
        label: t.description
    }));
};
export default class TypeOfIncomeFilterInput extends React.Component {
    constructor(props) {
        super(props);
        this.timeout = false;
    }
  loadOptions(inputValue, callback) {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      api
        .post(
          `type-of-incomes/type-of-income/filtered/0/100${this.props.id}`,
          inputValue || "",
          {
            headers: {
              "Content-Type": "text/plain"
            }
          }
        )
        .then(response => {
          callback(dataToSelectOptions(response.data));
        });
    }, 300);
  }

  render() {
      const { onChange, filter, ...rest } = this.props;
    return (
      <AsyncSelect
        defaultOptions
        cacheOptions
        placeholder="Search type of income"
        isClearable={true}
        loadOptions={this.loadOptions.bind(this)}
        menuPortalTarget={document.body}
        onChange={value => this.props.onChange(value ? value : null)}
        value={this.props.value}
        styles={{
          control: (base, state) => ({
            ...base,
            boxShadow: "none"
            // You can also use state.isFocused to conditionally style based on the focus state
          })
        }}
        {...rest}
      />
    );
  }
}

TypeOfIncomeFilterInput.defaultProps = {
  filter: {
    filter: ""
  }
};
