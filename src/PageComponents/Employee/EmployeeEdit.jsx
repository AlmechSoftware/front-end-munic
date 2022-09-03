import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import "../..//App.css";

const EmployeeEdit = () => {
  const initialFormState = {
    name: "",
    surname: "",
    email: "",
  };
  const [employee, setEmployee] = useState(initialFormState);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (id !== "new") {
      fetch(`http://localhost:8080/employee/${id}`)
        .then((response) => response.json())
        .then((data) => setEmployee(data));
    }
  }, [id, setEmployee]);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setEmployee({ ...employee, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch(
      "http://localhost:8080/employee/" +
        (employee.id ? "/" + employee.id : ""),
      {
        method: employee.id ? "PUT" : "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      }
    );
    setEmployee(initialFormState);
    navigate("/EmployeeDetails");
  };
  const title = <h2>{employee.id ? "Çalışan Düzenle" : "Çalışan Ekle"}</h2>;
  return (
    <div>
      
      <Container>
        {title}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={employee.name || ""}
              onChange={handleChange}
              autoComplete="name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="surname">Surname</Label>
            <Input
              type="text"
              name="surname"
              id="surname"
              value={employee.surname || ""}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">Email</Label>
            <Input
              type="text"
              name="email"
              id="email"
              value={employee.email || ""}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">
              Save
            </Button>{" "}
            <Button color="secondary" tag={Link} to="/EmployeeDetails">
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
};
export default EmployeeEdit;
