import React, {useState} from 'react'
import ShopFilterInput from "../../shop/components/shop-filter-input";
import ImportFileNameSelectInput from "../../import/components/import-filename-select-input";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import CategoryFilterInput from "../../catalog/components/category-filter-input";

export default props => {

    const [showColumnsFilter, toggleColumnsFilter] = useState(false);
    if (props.hide) return null;

   const shopId = props.filter.shop ? props.filter.shop.value : null;
//console.log(props.filter.value)
    return (
        <div className='row'>
            <div className="col-1" style={{paddingTop: '30px'}}>

                <Dropdown
                    isOpen={showColumnsFilter}
                    toggle={() => {
                        toggleColumnsFilter(!showColumnsFilter)
                    }}
                >
                    <DropdownToggle
                        color="default"
                        caret>
                        <i className="fa fa-filter"/>
                    </DropdownToggle>
                    <DropdownMenu>
                        <ul className="list-group">
                            {
                                Object.keys(props.columns).map((col, index) => (

                                    <li
                                        className="list-group-item py-0 px-1"
                                        key={index}
                                    >
                                        <label
                                            className="d-flex align-items-center m-0"
                                            htmlFor={`col${index}`}>
                                            <input
                                                type="checkbox"
                                                checked={props.columns[col]}
                                                id={`col${index}`}
                                                onChange={e => {
                                                        props.onFilterColumn(col, e.target.checked)
                                                }}
                                            />&nbsp;
                                            {col}
                                        </label>
                                    </li>
                                ))
                            }
                        </ul>
                    </DropdownMenu>
                </Dropdown>
            </div>

            <div className="col-3">
                <div className="form-group">
                    <label>Shop</label>

                    <ShopFilterInput
                      value={props.shopId}
                      filter={{
                            active: "YES",
                            filter: ""
                      }}

                      onChange={shop => {
                            props.onChange('shopId', shop ? shop.value : null)
                      }}
                    />

                </div>
            </div>

            <div className="col-3">
                <div className="form-group">
                    <label>Select File</label>
                    <ImportFileNameSelectInput
                      //  value={props.filter.uploadedFileId}
                        //key={props.filter.shopId}
                        filter={{
                            active:"YES",
                            filter:'',
                        }}

                        onChange={file => {
                            props.onChange('uploadedFileId', file? file.value:null);
                        }}/>
                </div>
            </div>


        </div>
    )
}