function Profile({ profile }) {
  // profile => { name, age, address, wife, children }
  // profile.name
  // profile.age
  return (
    <>
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Wife</th>
          <th>Children</th>
        </tr>
        <tr>
          <td>{profile.name}</td>
          <td>{profile.age}</td>
          <td>{profile.address}</td>
          <td>{profile.wife}</td>
          <td>{profile.children}</td>
        </tr>
      </table>
      <br />
    </>
  );
}

export default Profile;
