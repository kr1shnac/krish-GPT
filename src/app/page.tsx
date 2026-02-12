import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Card,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card>
        <CardHeader>
          <CardTitle>
            <h1 className="text-4xl font-bold">krish-GPT</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <Field orientation="horizontal">
              <Input type="search" placeholder="Search..." />
              <Button>Search</Button>
            </Field>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
