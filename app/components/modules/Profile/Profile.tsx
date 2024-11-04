import useGetSession from "@/lib/hooks/useGetSession";

const Profile = () => {
  const { jwtSession, oAuthSession } = useGetSession();
  console.log(jwtSession, oAuthSession);

  return (
    <div className="min-h-screen pt-32 bg-[url('/common_layers_base.jpeg')]">Profile</div>
  );
};

export default Profile;
