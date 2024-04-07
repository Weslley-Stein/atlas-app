import React from 'react';
import logo from './assets/logo.svg';
import googleIcon from './assets/google-icon.webp';
import githubIcon from './assets/github-icon.png';
import xIcon from './assets/x-icon.png';
import horizontalLine from './assets/horizontal-line.svg';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from '@/components/ui/label';
import { Input} from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from './lib/utils';
//import { InputPassword } from './components/ui/inputPassword';


export default function App(){
  return(
    <main className="flex justify-between font-ibmPlexSans bg-black h-screen w-screen">
      <aside className="bg-white w-4/5 flex justify-center items-center flex-col rounded-2xl overflow-auto">
        <h1 className="text-3xl font-bold">Atlas - Infrastructure Manager</h1>
        <img src={logo} className="m-8"/>
        <h4 className="text-l font-thin">Manage your Infrastructure in a way you never seen before.</h4>
      </aside>
      <aside className="bg-black w-3/5 h-screen flex justify-center items-center">
        <Card className="border-2 border-solid border-zinc-800 w-4/6 bg-zinc-950">
          <CardHeader>
            <CardTitle className="text-white my-2">
              Welcome back!
            </CardTitle>
            <CardDescription className="text-slate-50 text-sm">
              Don't have an account yet? <Button variant="link" className={cn("text-white w-16 underline font-thin")}>Sign Up</Button>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col">
            <div className="mb-2">
              <Label className="text-white font-bold">Email</Label>
              <Input className="my-2 bg-mail bg-no-repeat pl-10 bg-left bg-[length:40px_24px]" placeholder="email@gmail.com" type="email"/>
            </div>
            <div className="my-2">
              <Label className="text-white font-bold">Password</Label>
              <Input className={`mt-2 bg-lock bg-no-repeat pl-10 bg-left bg-[length:38px_24px]`} placeholder="••••••••" type="password"/>
            </div>
            <Button variant="link" className="text-white underline flex justify-end m-0 p-0">Forgot your password?</Button>
            <Button className="w-full bg-violet-700 font-bold mt-8" >Sign In</Button>
          </CardContent>
          <CardFooter className="flex flex-col mb-1">
            <div className="flex justify-between items-center my-4">
              <img src={horizontalLine} className="w-5/12 h-3"/>
              <span className="text-white font-bold">OR</span>
              <img src={horizontalLine} className="w-5/12 h-3"/>
            </div>
            <div className="flex justify-between w-full mt-8"> 
              <Button className="w-2/4 h-12 bg-white">
                <img src={googleIcon} className="w-14 h-14"/>
              </Button>
              <Button className="w-2/4 h-12 bg-white mx-6">
                <img src={githubIcon} className="w-10 h-10"/>
              </Button>
              <Button className="w-2/4 h-12 bg-white">
                <img src={xIcon} className="w-8 h-18"/>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </aside >
    </main>
  );
};