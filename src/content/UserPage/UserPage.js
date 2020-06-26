import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Form,
  TextInput,
  Button,
  Checkbox,
} from 'carbon-components-react';
const UserPage = () => {
  return (
    <div className="user-page__container">
      <div className="bx--grid bx--grid--full-width user-page">
        <div className="bx--row user-page__banner">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem href="#">Manage users: Users</BreadcrumbItem>
            <BreadcrumbItem href="/#/user" isCurrentPage>
              New user
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="bx--row user-page__border" />
        <div className="bx--row user-page__heading">New user</div>
        <div className="bx--row user-page__content">
          <div className="bx--col-md-4 bx--col-lg-6 user-page__form">
            <Form>
              <TextInput
                className="user-page__form-text"
                id="user"
                labelText="User"
                placeholder="The user's full name"
              />
              <TextInput
                className="user-page__form-text"
                id="username"
                labelText="Username"
                placeholder="The username that the user will use to log in"
              />
              <TextInput
                className="user-page__form-text"
                id="email"
                labelText="Email"
                placeholder="The user's email address"
              />
              <TextInput
                className="user-page__form-text"
                id="password"
                labelText="Password (optional)"
                placeholder="Enter a temporary password for the user"
              />
              <TextInput
                className="user-page__form-text"
                id="passwordx2"
                labelText="Re-enter password (optional)"
                placeholder="Re-enter the new password"
              />
              <fieldset className="bx--col-md-5 bx--fieldset">
                <legend className="bx--label">Roles</legend>
                <Checkbox labelText="Administrator" id="checked" />
                <Checkbox labelText="Business analyst" id="checked-2" />
                <Checkbox labelText="Data engineer" id="checked-3" />
                <Checkbox labelText="Data quality analyst" id="checked-4" />
                <Checkbox labelText="Data scientist" id="checked-5" />
                <Checkbox labelText="Data steward" id="checked-6" />
                <Checkbox labelText="Developer" id="checked-7" />
              </fieldset>
              <Button id="user-page__cancel" kind="secondary" type="submit">
                Cancel
              </Button>
              <Button disabled kind="primary" type="submit">
                Create
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
