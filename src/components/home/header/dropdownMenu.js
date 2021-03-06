import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";

export default class MenuDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Menu
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <Link to={`/`} className="dropdown__menu-link">
              All recipes
            </Link>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <Link to={`/myBooks`} className="dropdown__menu-link">
              My books
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}