import { UserForm } from "./components/UserForm";
import UserList from "./components/UserList";

export default function Home() {
  return (
    <div className="container mx-auto p-24">
      <UserForm />
      <UserList />
    </div>
  );
}
