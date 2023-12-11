import { Link } from "react-router-dom";

export default function ErrorPage() {
  // Error page for when user tries to access a page that does not exist, redirects to home page
  return (
    <div>
      <h1>Oops!</h1>
      <p>Something went wrong. This page does not exist.</p>
      <Link to="/">
        <button>Go Home</button>
      </Link>
    </div>
  );
}
