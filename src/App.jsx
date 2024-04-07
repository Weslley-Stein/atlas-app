import React from 'react';
import logo from './assets/logo.svg';
import googleIcon from './assets/google-icon.webp';
import githubIcon from './assets/github-icon.png';
import xIcon from './assets/x-icon.png';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from './lib/utils';

export default function App(){
  return(
    <main className="flex justify-between font-mono">
      <aside className="bg-white w-4/5 h-screen flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold">Atlas - Infrastructure Manager</h1>
        <img src={logo} className="m-8"/>
        <h4 className="text-sm font-thin">Manage your Infrastructure in a way you never seen before.</h4>
      </aside>
      <aside className="bg-black w-3/5 h-screen flex justify-center items-center">
        <Card className="bg-black border-0 w-4/6">
          <CardHeader>
            <CardTitle className="text-white my-4">
              Welcome back!
            </CardTitle>
            <CardDescription className="text-slate-50 text-sm">
              Don't have an account yet? <Button variant="link" className={cn("text-white w-16 underline font-thin")}>Sign Up</Button>
            </CardDescription>
          </CardHeader>
          <CardContent className="my-2 flex flex-col">
            <div className="my-2">
              <Label className="text-white font-bold">Email</Label>
              <Input className="my-2" placeholder="email@gmail.com" type="email"/>
            </div>
            <div className="my-2">
              <Label className="text-white font-bold">Password</Label>
              <Input className="my-2" placeholder="••••••••" type="password"/>
            </div>
            <Button variant="link" className="text-white underline flex justify-end m-0 p-0">Forgot your password?</Button>
            <Button className="w-full my-4 bg-purple-700 font-bold" >Sign In</Button>
          </CardContent>
          <CardFooter className="flex flex-col">
            <span className="text-white m-auto">or</span>
            <div className="flex justify-between w-full my-8"> 
              <Button className="w-28 h-12 bg-white">
                <img src={googleIcon} className="w-14 h-14"/>
              </Button>
              <Button className="w-28 h-12 bg-white">
                <img src={githubIcon} className="w-10 h-10"/>
              </Button>
              <Button className="w-28 h-12 bg-white">
                <img src={xIcon} className="w-8 h-18"/>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </aside >
    </main>
  );
};