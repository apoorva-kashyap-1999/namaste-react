import { createContext } from "react/cjs/react.production.min";

const UserContext = createContext({
    loggedInUser:'Default User',
});

export default UserContext;