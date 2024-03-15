import RegisterForm from "./form";
import AuthFormCard from "@/components/AuthFormCard";

export default function RegisterPage() {
  return (
    <AuthFormCard
      mode="register"
    >
      <RegisterForm></RegisterForm>
    </AuthFormCard>
  )
}