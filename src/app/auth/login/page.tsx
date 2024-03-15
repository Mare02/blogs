import LoginForm from "./form";
import AuthFormCard from "@/components/AuthFormCard";

export default function RegisterPage() {
  return (
    <AuthFormCard
      mode="login"
    >
      <LoginForm></LoginForm>
    </AuthFormCard>
  )
}