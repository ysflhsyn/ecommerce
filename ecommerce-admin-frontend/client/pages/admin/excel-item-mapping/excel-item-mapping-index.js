import React from 'react'
import api from '../../../api'
import {Card, CardBody, CardTitle, Alert} from 'reactstrap';

import {FormattedMessage} from 'react-intl';
import ActionButtons from '../../../components/form-elements/action-buttons';
import ExcelItemMappingTable from './components/excel-item-mapping-table';
import {injectIntl, defineMessages} from 'react-intl'
import SweetAlert from 'react-bootstrap-sweetalert'
import CenterCircularProgress from '../../../components/ui-elements/center-circular-progress'
import ExcelItemMappingFilterPanel from './components/excel-item-mapping-filter-panel'
import {displayName} from "../../../helpers";

const messages = defineMessages({
    updateSuccessMsg: {
        id: 'excel_item_mapping.update_success_msg',
        defaultMessage: 'Comission updated successfully'
    },
    createdSuccessMsg: {
        id: 'excel_item_mapping.create_success_msg',
        defaultMessage: 'Comission created successfully'
    },
    deleteSuccessMessage: {
        id: 'excel_item_mapping.delete_success_msg',
        defaultMessage: 'Comission deleted successfully'
    }
});


class ExcelItemMappingIndex extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            list: [],
            selected: null,
            showForm: false,
            initialSearch: true,
            filter:
                {
             shop:null,
             file:null
            },
            page: 0,
            brandDropdownDefaultOptions: [],
            categoryDropdownDefaultOptions: [],
            itemDropdownDefaultOptions: [],
            showColumns: {
                "articuleNumber": false,
                "barCode": false,
                "brand": true,
                "category1": true,
                "category2": true,
                "category3": true,
                "itemName": true,
                "model": true,
                "nameAz": false,
                "nameRu": false,
                "price": false,
                "shopDescription": true,
            }
        };
        this.fetchTimeout = false;
        this.tableState = {
            page: 0,
            pageSize: 10
        };
        this.getItems=this.getItems.bind(this)
    }

    componentDidMount() {
        api.post(`brands/brand/filtered/?page=0&size=10`, {
            filter:"",
            active: 'YES'
            }, {
            "Content-Type": "application/json"
            }
        ).then(response => {
            // const datas = response.data.map((item)=> ({data:item}));

            this.setState({brandDropdownDefaultOptions: response.data.content});

        });
        api.post(`catalog/categories/filtered/?page=0&size=0`, {
                filter:"",
                active: 'YES'
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(response => {
            this.setState({categoryDropdownDefaultOptions: response.data.content})
        });
        api.post(`catalog/item-name/filtered/?page=0&size=10`, {
            "active": "YES",
            "categoryId": 0,
            "filter": ""
            }, {
                "Content-Type": "application/json"
            }
        ).then(response => {
            // const datas = response.data.map((item)=> ({data:item}));

            this.setState({itemDropdownDefaultOptions: response.data.content});

        });
this.getItems();
    }

    onChangeFilter( filter,value) {
   /*     let value=e.target.value;
        let newFilter={...this.state,value};
        this.setState({
            newFilter
        },()=>this.getItems());
        this.props.onChange(newFilter)*/
      let newFilter = {...this.state.filter, [filter]: value};
            console.log(this.state.filter);
     /*  if (filter === "shopId") {
            newFilter.file= null;
        }
       else
       {
        newFilter.shop=null;
       }*/
        this.setState({filter: newFilter}, () => this.getItems());
    }

    filterColumn(column, e){
        let value =e.target.value;

        this.setState(
                 {showColumns: {...this.state.showColumns, [column]:value}}
             )
    }

    getItems(state) {

        if (this.fetchTimeout) clearTimeout(this.fetchTimeout);
        state = state || this.tableState;
         let Fetch = () => {

             this.setState({loading: true, selected: null});
             this.tableState = state;

             const {file, shop} = this.state.filter;
             let filter={
                 mapped:false,
                 shopId: shop ? shop.value : null,
                 uploadedFileId: file ? file.value : null,
            };

             console.log(filter.shopId);
            api.post(`item-mapping-excels/item-mapping-excel/filtered?page=0&size=10`,
                {...filter}
                )
                .then(response => {
                this.setState({
                    list: response.data.content,
                    loading: false,
                    initialSearch: false,
                    page: Math.ceil(response.data.totalElements / state.pageSize)
                });
                    console.log(response.data.content);
            });

        };

        this.fetchTimeout = setTimeout(() => {
            Fetch()
        }, 0)

    }

    onClickRow(row) {
     /*    this.setState(state => {
             state.selected = row.index === state.selected ? null : row.index;
             return state
         })*/
    }

    dissmissAlert() {
        this.setState({alertMsg: null, sweetAlertMsg: null})
    }

    submit() {
        this.setState({saving: true});
        api.post('item-mapping-excels/item-mapping-excel/map', this.state.form).then(response => {
            this.setState({mapped: true})
        }).catch(error => {
            //TODO Check data message exists
            this.setState({saving: false, sweetAlertMsg: error.response.data.message});
        })

    }

    render() {

        return (
            <Card>
                <CardBody>
                    <CardTitle>
                        <FormattedMessage id="excel_item_mapping.title" defaultMessage="Excel Item Mapping"/>
                    </CardTitle>

                    <CenterCircularProgress portal show={this.state.saving} size={60} delay={800}/>

                    <div className="row">
                        <div className="col-9">
                            <ExcelItemMappingFilterPanel
                                hide={this.state.showForm}
                                onChange={this.onChangeFilter.bind(this)}
                                filter={this.state.filter}
                                shops={this.state.shops}
                                columns={this.state.showColumns}
                                onFilterColumn={this.filterColumn.bind(this)}
                            />
                        </div>
                        <div className="col-3">
                            <ActionButtons
                                onClickRefresh={this.getItems.bind(this)}
                            />

                        </div>
                    </div>

                    <Alert type="success" isOpen={!!this.state.alertMsg} toggle={this.dissmissAlert.bind(this)}>
                        {this.state.alertMsg}
                    </Alert>

                    <SweetAlert
                        show={!!this.state.sweetAlertMsg}
                        error
                        confirmBtnText="Ok"
                        confirmBtnBsStyle="danger"
                        btnSize="xs"
                        title=""
                        onConfirm={this.dissmissAlert.bind(this)}
                        onCancel={this.dissmissAlert.bind(this)}
                    >
                        {this.state.sweetAlertMsg}
                    </SweetAlert>

                    <ExcelItemMappingTable
                        show={!this.state.showForm}
                        loading={this.state.loading}
                        list={this.state.list}
                        onClickRow={this.onClickRow.bind(this)}
                        selectedIndex={this.state.selected}
                        pages={this.state.page}
                        initialSearch={this.state.initialSearch}
                        onFetchData={this.getItems.bind(this)}
                        itemDefaultOptions={this.state.itemDropdownDefaultOptions}
                        categoryDefaultOptions={this.state.categoryDropdownDefaultOptions}
                        brandDefaultOptions={this.state.brandDropdownDefaultOptions}
                        showColumns={this.state.showColumns}
                    />

                </CardBody>
            </Card>
        )
    }
}


export default injectIntl(ExcelItemMappingIndex)


