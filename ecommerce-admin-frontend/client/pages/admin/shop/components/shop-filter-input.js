/**
 * Created by Artoghrul Salimli on 3/4/2019.
 */
import React from 'react';
import api from '../../../../api'
import AsyncSelect from 'react-select/lib/Async';
import {displayName} from "../../../../helpers";

export const dataToSelectOptions = data => {
    return data.map(shop => ({
        value: shop.shopId,
        label: shop.description
    }));
};

export default class ShopFilterInput extends React.Component {
    constructor(props) {
        super(props);
        this.timeout = false;
    }

    loadOptions(inputValue, callback) {
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            api.post(`shop/shops/filtered/?page=0&size=100`, {
                ...this.props.filter,
                filter: inputValue || ''
            }).then(response => {
                callback(dataToSelectOptions(response.data.content));
            });
        }, 300)

    }

    render() {

        const {value, onChange, ...rest} = this.props;

        return (
            <AsyncSelect
                defaultOptions
                cacheOptions
                placeholder="Search shop"
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



