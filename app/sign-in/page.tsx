import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <div className="grid h-screen grid-cols-1 place-items-center">
            <div className="">
              <SignIn />
            </div> 
        </div>;
}