import { useState } from "react";
import { Button, Container, Form, Modal, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navmenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary py-3 shadow">
        <Container fluid>
          <NavLink to='/'><Navbar.Brand><img className="img-fluid logo" src="image/logo.png"/></Navbar.Brand></NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
              className={({ isActive }) => isActive ? "nav_item_active" : ""}
              to="/">
                <nav-item className="mx-2">
                  <a className="nav-link">HOME</a>
                </nav-item>
              </NavLink>
              <NavLink
              className={({ isActive }) => isActive ? "nav_item_active" : "nav_item_active_hover"}
              to="/About">
                <nav-item className="mx-2">
                  <a className="nav-link">ABOUT US</a>
                </nav-item>
              </NavLink>
              <NavLink
              className={({ isActive }) => isActive ? "nav_item_active" : "nav_item_active_hover"}
              to="/umrah">
                <nav-item className="mx-2">
                  <a className="nav-link">UMRAH PACKAGES</a>
                </nav-item>
              </NavLink>
              <NavLink
              className={({ isActive }) => isActive ? "nav_item_active" : "nav_item_active_hover"}
              to="/hajj">
                <nav-item className="mx-2">
                  <a className="nav-link">HAJJ PACKAGES</a>
                </nav-item>
              </NavLink>
              <NavLink
              className={({ isActive }) => isActive ? "nav_item_active" : "nav_item_active_hover"}
              to="/tour">
                <nav-item className="mx-2">
                  <a className="nav-link">TOUR PACKAGES</a>
                </nav-item>
              </NavLink>
              <NavLink
              className={({ isActive }) => isActive ? "nav_item_active" : "nav_item_active_hover"}
              to="/visa">
                <nav-item className="mx-2">
                  <a className="nav-link">VISA SERVICE</a>
                </nav-item>
              </NavLink>
              <NavLink
              className={({ isActive }) => isActive ? "nav_item_active" : "nav_item_active_hover"}
              to="/blog">
                <nav-item className="mx-2">
                  <a className="nav-link">BLOG</a>
                </nav-item>
              </NavLink>
              <NavLink
              className={({ isActive }) => isActive ? "nav_item_active" : "nav_item_active_hover"}
              to="/contact">
                <nav-item className="mx-2">
                  <a className="nav-link">CONTACT US</a>
                </nav-item>
              </NavLink>
              <Button variant="primary" onClick={handleShow}>SUBSCRIBE</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>BEST TRAVEL AGENCY IN BANGLADESH</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">SUBSCRIBE OUR NEWSLETTER
        SUBSCIBE TO RECEIVE OUR INTERESTING UPDATES</Modal.Body>
        <div className="subscribeInputSection">
              <Form className="d-flex">
                <Form.Group
                  className="mb-3 finput"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>EMAIL ADDRESS</Form.Label>
                  <Form.Control className="inputBorder" type="email" placeholder="name@example.com" />
                </Form.Group>
              </Form>
            </div>
        <Modal.Footer className="m-auto">
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            SUBSCIBE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navmenu;
