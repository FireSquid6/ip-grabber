"use client";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  async function grabIp(): Promise<void> {
    const res = await axios.get("https://api.ipify.org?format=json");
    // eslint-disable-next-line
    const ip: string = res.data.ip;

    const postResponse = await fetch(`/api/mail?ip=${ip}`, {
      method: "POST",
    });

    console.log(postResponse);
  }

  useEffect(() => {
    grabIp();
  }, []);

  return <p>Oops! Something went wrong</p>;
}
