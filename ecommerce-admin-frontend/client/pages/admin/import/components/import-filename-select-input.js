import React from 'react';
import api from '../../../../api'
import AsyncSelect from 'react-select/lib/Async';


export default class ImportFileNameSelectInput extends React.Component {

    constructor(props){
        super(props);
        this.timeout=false;
    }

    loadOptions(inputValue, callback) {

        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            api.post(`impex/upload-files/filtered/?page=0&size=100`,
                {...this.props.filter || {}}).then(response => {
                callback(response.data.content.map(i => ({value: i.id, label: i.filename, original: i})))
            });
        }, 300)
    }


    render() {

        const {filter, onChange, ...props} = this.props;

        return (
            <AsyncSelect
                defaultOptions
                cacheOptions
                placeholder="Search file name"
                isClearable={true}
                menuPortalTarget={document.body}
                loadOptions={this.loadOptions.bind(this)}
                onChange={value => this.props.onChange(value ? value : null)}
                styles={{
                    control: (base, state) => ({
                        ...base,
                        boxShadow: "none"
                    })
                }}
                {...props}
            />
        );
    }
}

