import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type AuthFormCardProps = {
  children: React.ReactNode;
  mode: "register" | "login";
};

export default function AuthFormCard(props: AuthFormCardProps) {
  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader className="mb-4 text-center">
        <CardTitle>Welcome to Devinarium!</CardTitle>
        <CardTitle className="text-xl text-gray-600">
          {props.mode === "register"
            ? "Create your account"
            : "Sign in to your account"}
        </CardTitle>
      </CardHeader>
      <CardContent>{props.children}</CardContent>

      <div className="text-center text-sm pb-6">
        <p className="inline text-gray-600">
          {props.mode === "register"
            ? "Already have an account?"
            : "Don't have an account?"}
        </p>
        <Link
          href={`/auth/${props.mode === "register" ? "login" : "register"}`}
          className="underline ml-1 font-semibold"
        >
          {props.mode === "register" ? "Log in" : "Register"}
        </Link>
      </div>
    </Card>
  );
}
