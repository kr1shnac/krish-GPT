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
import { ChatMessage } from "./ChatMessage";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ChatWindow() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>
            <h1 className="text-4xl font-bold">krish-GPT</h1>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[500px] w-full p-4 pr-4">
            <div className="flex flex-col gap-2">
              <ChatMessage role="ai" content="Hello! I am Krish-GPT." />
              <ChatMessage
                role="user"
                content="I just added a custom ScrollArea component!"
              />
              <ChatMessage
                role="ai"
                content="That is great. Now your chat won't break the layout."
              />
              <ChatMessage role="user" content="Testing overflow..." />
              <ChatMessage
                role="ai"
                content="If you add enough messages, you will see a nice slim scrollbar on the right."
              />
            </div>
          </ScrollArea>
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
