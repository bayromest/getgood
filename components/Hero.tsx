"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { GetAccountPUUIDByRiotId } from "@/actions/accounts";
const formSchema = z.object({
  gameName: z.string().min(2),
  tagLine: z.string().min(2),
});

export function Hero() {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   gameName: "",
    // },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const ppuid = await GetAccountPUUIDByRiotId({
        gameName: values.gameName,
        tagLine: values.tagLine,
      });
      console.log(ppuid);
      router.push(`/summoner/${ppuid}`);
    } catch {}
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <div className="flex items-center gap-4 w-full">
          <div className="w-8/12">
            <FormField
              control={form.control}
              name="gameName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Lerton" {...field} className="w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <p className="text-lg">#</p>
          <div className="w-4/12">
            <FormField
              control={form.control}
              name="tagLine"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="May" {...field} className="w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
