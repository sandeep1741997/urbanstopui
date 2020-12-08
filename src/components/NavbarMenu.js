import React from 'react';
import { Navbar, Nav, InputGroup, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faPlus, faProjectDiagram, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, Router } from 'react-router-dom'

function NavbarMenu() {
    return (
        <div>
            <Navbar className="bg-dark justify-content-between">
                <Nav>
                    <Button> <FontAwesomeIcon icon={faList} color="white" />Data Library</Button> &nbsp;&nbsp;
                    <Button> <FontAwesomeIcon icon={faProjectDiagram} color="white" />Workflow</Button>

                </Nav>
            </Navbar>
        </div>

    );
}

export default NavbarMenu;