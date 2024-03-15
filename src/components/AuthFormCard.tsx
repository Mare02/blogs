import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from 'next/link';

type AuthFormCardProps = {
  children: React.ReactNode,
  mode: "register" | "login",
}

export default function AuthFormCard(props: AuthFormCardProps) {
  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader className="mb-4">
        <CardTitle>Welcome to Devinarium!</CardTitle>
        <CardTitle className="text-xl text-gray-600">
          {
            props.mode === "register"
              ? "Create your account"
              : "Sign in to your account"
          }
        </CardTitle>
        <div className="pt-2">
          <p className="inline">
            {
              props.mode === "register"
                ? "Already have an account?"
                : "Don't have an account?"
            }
          </p>
          <Link href={`/auth/${props.mode === 'register' ? 'login' : 'register'}`} className="underline ml-2">
            { props.mode === "register" ? "Login" : "Register" }
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        { props.children }
      </CardContent>
    </Card>
  )
}