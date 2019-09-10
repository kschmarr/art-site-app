import React from "react";

export default React.createContext({
  art: [],
  bio: "",
  userid: "",
  username: "",
  deleteArt: () => {},
  editArt: () => {},
  addArt: () => {},
  editBio: () => {},
  setUser: () => {}
});
