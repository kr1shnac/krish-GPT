import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUp } from "lucide-react";
import {
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Card,
} from "@/components/ui/card";

export function ChatWindow() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>
            <h1 className="text-4xl font-bold">krish-GPT</h1>
          </CardTitle>
        </CardHeader>
        <CardContent className="h-[400px] bg-muted/50 p-4 rounded-md">
          <div className="text-sm text-gray-500">krish is ready to chat...</div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Input type="search" placeholder="Search..." />
          <Button size="icon" aria-label="Submit">
            <ArrowUp />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
