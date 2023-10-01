import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "materialize-css/dist/js/materialize";
import "materialize-css/dist/css/materialize.css";

import { supabase } from "./CreateClient";

function App() {
  const [users, setUsers] = useState([]);

  console.log(users);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const { data } = await supabase
      .from("users")
      .select("*")
      .order("id", { ascending: true });
    setUsers(data);
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-around align-items-center">
        <h1>Supabase Crud</h1>
        <button className="btn-floating btn-large waves-effect waves-light orange">
          <i className="material-icons">add</i>
        </button>
      </div>
      <table className="striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>
                <button className="btn-floating btn-large waves-effect waves-light blue lighten-2">
                  <i class="material-icons blue-text text-darken-4">edit</i>
                </button>
              </td>
              <td>
                <button className="btn-floating btn-large waves-effect waves-light red lighten-2">
                  <i class="material-icons red-text text-darken-2">delete</i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
