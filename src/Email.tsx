import { Html } from "@react-email/html";

export interface EmailProps {
  ip: string;
}

export default function Email({ ip }: EmailProps) {
  return (
    <Html lang="en">
      <p>Looks like some moron clicked the link.</p>
      <p>
        Here's their IP address: <pre>{ip}</pre>
      </p>
      <p>
        They accessed the link <pre>{Date.now()}</pre> milliseconds after the
        epoch
      </p>
    </Html>
  );
}
