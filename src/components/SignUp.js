import firebase from "../firebase";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log(user);
        // Update user profile with additional information
        user.updateProfile({
          phoneNumber,
          address,
          dob,
          gender,
          photoUrl,
        });
      })
      .catch((error) => {
        // An error occurred
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref(`users/${email}/${file.name}`);
    storageRef.put(file).then((snapshot) => {
      console.log("Uploaded a file");
      snapshot.ref.getDownloadURL().then((url) => {
        setPhotoUrl(url);
      });
    });
  };

  const handlePhotoPickerClick = () => {
    document.getElementById("photoInput").click();
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <label htmlFor="gender">Gender</label>
        <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="photo">Profile Photo</label>
        <input
          type="file"
          id="photoInput"
          accept="image/*"
          onChange={handlePhotoUpload}
          style={{ display: "none" }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
{photoUrl ? (
<img src={photoUrl} alt="Profile" style={{ width: 100, height: 100 }} />
) : (
<button type="button" onClick={handlePhotoPickerClick}>
Choose Photo
</button>
)}
</div>
<button type="submit">Sign Up</button>
  </form>
</div>
);
};
export default SignUp;
