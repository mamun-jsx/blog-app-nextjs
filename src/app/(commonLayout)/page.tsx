import { Button } from "@/components/ui/button";
import { userService } from "@/services/user.service";
// ! Home page
export default async function Home() {
  const { data, error } = await userService.getSelection();
  console.log(data);
  return (
    <div>
      <Button>Click Here</Button>
    </div>
  );
}
