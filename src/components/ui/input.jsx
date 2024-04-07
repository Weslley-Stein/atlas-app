import * as React from "react";

import { cn } from "@/lib/utils";

import logo from '../../assets/logo.svg';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
        className
      )}
      ref={ref}
      {...props} />)
  );
})

/*
const InputPassword = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<div className="m-0 p-0">
      <img src={logo} className="m-1 p-0 w-8 h-8 inline absolute"/>
      <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
        className
      )}
      ref={ref}
      {...props} ></input>
    </div>)
  );
})*/

Input.displayName = "Input"



export { Input }
