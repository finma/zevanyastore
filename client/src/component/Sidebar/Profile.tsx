interface UserTypes {
  name: string;
  email: string;
}

export const Profile = (props: { user: UserTypes }) => {
  const { user } = props;

  return (
    <div className="flex justify-start items-center mx-6 mt-10">
      <div className="flex flex-col justify-center items-center w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-14 h-14 text-blue-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-xl font-medium">{user.name}</span>
        <span>{user.email}</span>
      </div>
    </div>
  );
};
