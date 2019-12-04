import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    Nav,
    NavItem,
    NavbarBrand,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu, DropdownItem, NavLink,
} from "reactstrap";
import * as authActions from "../../redux/actions/auth-actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { injectIntl, defineMessages } from "react-intl";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import flagaz from "../../assets/img/brand/az.png";
import flagen from "../../assets/img/brand/en.png";
import flagru from "../../assets/img/brand/ru.png";
import logo from "../../assets/img/brand/logo.svg";

const messages = defineMessages({
    required: {
        id: "validation.required",
        defaultMessage: "xananın doldurulması vacibdir."
    },
    button:{
        id: "signin.signin_button",
        defaultMessage: "Daxil ol"
    }
});

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loading:false
    };
    this.changeLanguage=this.changeLanguage.bind(this);
    this.Submit=this.Submit.bind(this);
  }
    changeLanguage(x) {
        let lang = x;
        this.props.authActions.changeLanguage(lang);
    }

  Submit(data) {
    if (this.state.loading) return;
    this.setState({ loading: true, showErrorMsg: false });
    this.props.authActions
        .login(data)
        .then(response => {})
        .catch(error => {
          this.setState({
            requestErrorMsg: error.response.data.message,
            loading: false
          });
        });
  }

  render() {
    const intl = this.props.intl;
    return (
        <div>
            <Nav className="px-5 py-2" navbar style={{backgroundColor:"white",padding:"15px !important",display:"flex",flexDirection:"row",justifyContent: "space-between"}}>
                <NavbarBrand>
                    <img src={logo} alt="flagaz" className="mr-2" />
                </NavbarBrand>
                <NavItem className="d-md-down-none" style={{width:"125px"}}>
                    <UncontrolledDropdown setActiveFromChild >
                        <DropdownToggle tag="a" className="nav-link c-pointer" caret >
                            <i className="fa fa-globe mr-1" aria-hidden="true" />
                            {this.props.auth.language === "az"
                                ? "AZE"
                                : this.props.auth.language === "ru"
                                    ? "RUS"
                                    : "ENG"}
                        </DropdownToggle>
                        <DropdownMenu >
                            <DropdownItem>
                                <NavLink
                                    onClick={this.changeLanguage.bind(this, "az")}
                                    className="c-pointer mr-2"
                                >
                                    <img src={flagaz} alt="flagaz" className="mr-2" />
                                    azerbaijani
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink
                                    onClick={this.changeLanguage.bind(this, "en")}
                                    className="c-pointer mr-2"
                                >
                                    <img src={flagen} alt="flagen" className="mr-2" />
                                    english
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink
                                    onClick={this.changeLanguage.bind(this, "ru")}
                                    className="c-pointer mr-2"
                                >
                                    <img src={flagru} alt="flagru" className="mr-2" />
                                    russian
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </NavItem>

            </Nav>
            <div className="d-flex justify-content-center align-items-lg-center pt-4" style={{ height: "100vh" }}>
                <Formik
                    initialValues={{
                        username: "",
                        password: "",
                    }}
                    onSubmit={this.Submit}
                    validationSchema={
                        Yup.object().shape({
                                username:
                                Yup.string()
                                .required(intl.formatMessage(messages.required)),
                                password:
                                Yup.string()
                                .required(intl.formatMessage(messages.required))
                        })}
                >
                    {(props) =>{
                    console.log(props);
                        return (
                            <Form style={{width: "400px"}} onSubmit={props.handleSubmit} >
                                <Card>
                                    <CardBody className="px-5 pb-5">
                                        <CardTitle className="text-center">ADMIN</CardTitle>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                    <i className="fa fa-user" />
                                                    </span>
                                                </div>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="username"
                                                    value={props.values.username}
                                                    onChange={props.handleChange}
                                                    onBlur={props.handleBlur}
                                                    placeholder=""
                                                />
                                        </div>
                                       <div>
                                           {props.errors.username&&props.touched.username?(<div style={{color:"red",marginTop:"6px"}}>{intl.formatMessage(messages.required)}</div>):null}
                                       </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                    <i className="fa fa-lock" />
                                                    </span>
                                                </div>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    placeholder=""
                                                    onChange={props.handleChange}
                                                    onBlur={props.handleBlur}
                                                    value={props.values.password}
                                                />
                                            </div>
                                            {props.errors.password && props.touched.password?(<div style={{color:"red",marginTop:"6px"}}>{intl.formatMessage(messages.required)}</div>):null}

                                        </div>
                                        <button className="btn btn-primary block full-width m-b btn-block"  type="submit" disabled={this.state.loading}   >
                                            {intl.formatMessage(messages.button)}
                                        </button>
                                    </CardBody>
                                </Card>
                            </Form>
                        )
                    }
                    }
                </Formik>
            </div>
        </div>
    );
  }
}

function mapStoreToProps(state) {
  return {
    alert: state.alert
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
}

SignIn = connect(
    mapStoreToProps,
    mapDispatchToProps
)(SignIn);

export default injectIntl(SignIn);
