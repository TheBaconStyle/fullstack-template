import { auth } from "@/config/auth";
import Image from "next/image";
import { ApiBtn } from "./apibtn";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <div>
        {session ? `logged in as ${session.user?.name}` : "not logged in"}
      </div>
      <div>
        {session?.user?.image ? (
          <Image
            src={session?.user?.image}
            alt={`${session.user.name}'s avatar`}
            width={128}
            height={128}
          />
        ) : null}
      </div>
      <div>
        <ApiBtn />
      </div>
    </div>
  );
}
