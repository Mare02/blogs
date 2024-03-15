"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function RegisterForm() {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get('email'));
    console.log(formData.get('fullname'));
    console.log(formData.get('password'));
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="grid w-full items-center gap-6">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email address</Label>
          <Input name="email" type="email" placeholder="Your email address" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="fullname">Full name</Label>
          <Input name="fullname" type="text" placeholder="Your full name" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input name="password" type="text" placeholder="Your password" />
        </div>
        <Button type="submit" className="w-full">Submit</Button>
      </div>
    </form>
  )
}