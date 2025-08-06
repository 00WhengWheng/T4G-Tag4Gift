import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: IndexComponent,
});

function IndexComponent() {
  const { isAuthenticated, user, logout, login } = Route.useRouteContext().auth;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to Tag4Gift</h1>
      {isAuthenticated ? (
        <div>
          <p>Hello, {user?.name || 'friend'}!</p>
          <button
            onClick={() => logout()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <button
            onClick={() => login()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

