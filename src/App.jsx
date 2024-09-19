import { useState } from "react";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

export default function App() {
  // Controlled Form
  const [profile, setProfile] = useState({
    name: "Reza",
    age: -1,
    address: "",
    wife: "unmarried",
    children: 0
  })

  return (
    <>
      <Navbar />
      <Profile
        profile={profile}
      />
      <div>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={profile.name}
          onChange={(event) =>
            setProfile({
              ...profile,
              name: event.target.value,
            })
          }
        />
        <br />
        <br />
        <label htmlFor="">Age</label>
        <input
          type="number"
          value={profile.age}
          onChange={(e) => setProfile({
            ...profile,
            age: e.target.value,
          })}
        />
        <br />
        <br />
        <label htmlFor="">Address</label>
        <textarea
          name=""
          id=""
          value={profile.address}
          onChange={(e) =>
            setProfile({
              ...profile,
              address: e.target.value,
            })
          }
        ></textarea>
        <br />
        <br />
        <label htmlFor="">Wife</label>
        <input
          type="text"
          value={profile.wife}
          onChange={(e) =>
            setProfile({
              ...profile,
              wife: e.target.value,
            })
          }
        />
        <br />
        <br />
        <label htmlFor="">Children</label>
        <input
          type="number"
          value={profile.children}
          onChange={(e) =>
            setProfile({
              ...profile,
              children: e.target.value,
            })
          }
        />
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}
