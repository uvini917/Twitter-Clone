import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
} from "next-auth/react";

// interface LoginPageProps{
//   providers: Record<LiteralUnion<BuiltInProviderType>, ClientSafeProvider>
// }

const LoginPage = async () => {
  const providers = await getProviders();

  return (
    <div className="flex items-center justify-center h-screen">
      {providers ? (
        Object.values(providers).map((p: ClientSafeProvider) => (
          <div key={p.id}>
            <button className='flex items-center bg-twitterWhite pr-4 py-2 text-black rounded-full'>

              <img src="/google.png" className='h-6 px-3' alt="" />
              Sign in with {p.name}</button>
          </div>
        ))
      ) : (
        <div>No providers available</div>
      )}
    </div>
  );
};

export default LoginPage;

// export async function getServerSideProps() {

//   const providers = await getProviders();
//   console.log("get server sider pros function is called.");
//   return {
//     props: {providers},
//   }

// }
