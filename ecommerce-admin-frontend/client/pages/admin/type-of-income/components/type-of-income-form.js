import React from "react";
import FieldsErrorMessages from "../../../../components/validation/FieldsErrorMessages";
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from "reactstrap";
import classnames from "classnames";
import { injectIntl, FormattedMessage, defineMessages } from "react-intl";
import { Field, Formik,Form, FieldArray } from "formik";
import * as yup from "yup";
import validationMessages from "../../../../messages/validation";
import FormNavLinks from "../../../../components/form-elements/form-nav-links";
import {localizationFieldValidation} from "../../common/mx-formik-common-field-validations";

const navLinks = defineMessages({
  main: {
    id: "typeOfIncome.form.link.main_information",
    defaultMessage: "Əsas məlumatlar"
  }
});

class TypeOfIncomeForm extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      navLinks: [
        {
          tab: "1",
          title: props.intl.formatMessage(navLinks.main)
        }
      ]
    };

    this.validation = yup.object().shape({
      displayName: localizationFieldValidation(props.intl),
      description: yup
          .string()
          .required(props.intl.formatMessage(validationMessages.required))
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }


  render() {
    const initialData = this.props.formData;

    return (
        <Formik
            initialValues={{
              id: initialData.id,
              description: initialData.description || "",
              displayName:initialData.displayName || []
            }}
            onSubmit={this.props.submit}
            validationSchema={this.validation}
            validateOnBlur={false}
            validateOnChange={true}
        >
          {props => {

            this.props.bindSubmit(props.handleSubmit);
            console.log(props);
            return (
                <Form onSubmit={(e)=>{e.preventDefault();}}>
                  <FormNavLinks
                      active={this.state.activeTab}
                      links={this.state.navLinks}
                      onClick={this.toggle.bind(this)}
                      errors={props.errors}
                  />

                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <div className="row mt-3">
                        <div className="col-6">
                          <div className="form-group">
                            <label className="control-label">
                              <FormattedMessage
                                  id="typeOfIncome.form.description.label"
                                  defaultMessage="Description"
                              />
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                name="description"
                            />
                            <FieldsErrorMessages
                                show={props.errors.description}
                                messages={[props.errors.description]}
                            />
                          </div>
                        </div>
                      </div>
                      <button
                          className="hidden"
                          type="submit"
                          style={{ display: "none" }}
                      />
                    </TabPane>
                  </TabContent>
                </Form>
            );
          }}
        </Formik>
    );
  }
}

export default injectIntl(TypeOfIncomeForm);
