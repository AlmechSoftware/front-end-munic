import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import { Link } from "react-router-dom";
import "../..//App.css";

const EmpDetails = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:8080/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      });
  }, []);
  const remove = async (id) => {
    await fetch(`http://localhost:8080/employee/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      let updatedEmployees = [...employees].filter((i) => i.id !== id);
      setEmployees(updatedEmployees);
    });
  };
  if (loading) {
    return <p>Yükleniyor...</p>;
  }
  const employee = employees.map((employee) => {
    return (
      <tr key={employee.id}>
        <td style={{ whiteSpace: "nowrap" }}>{employee.name}</td>
        <td>{employee.surname}</td>
        <td>
          {employee.email}
        </td>
        <td className="actions" >
          <ButtonGroup>
            <Button
              size="sm"
              color="primary"
              tag={Link}
              to={"/employees/" + employee.id}
            >
              Düzenle
            </Button>
            <Button
              size="sm"
              color="danger"
              onClick={() => remove(employee.id)}
            >
              Sil
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });

  return (
    <div>
      
      <Container fluid>
        <div className="float-end">
          <Button
            className="btn-success"
            color="success"
            tag={Link}
            to="/employees/new"
          >
            Çalışan Ekle
          </Button>
        </div>
        
        <Table className="mt-4">
          <thead>
            <tr>
              <th width="20%">Name</th>
              <th width="20%">Surname</th>
              <th width="10%">Email</th>
              <th className="actions-th">Actions</th>
            </tr>
          </thead>
          <tbody>{employee}</tbody>
        </Table>
      </Container>
    </div>
  );
};
export default EmpDetails;