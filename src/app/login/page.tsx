import { BuiltInProviderType } from 'next-auth/providers/index';
import { ClientSafeProvider, getProviders, LiteralUnion } from 'next-auth/react'

// interface LoginPageProps{
//   providers: Record<LiteralUnion<BuiltInProviderType>, ClientSafeProvider> 
// }

const LoginPage = async () =>  {
  const providers = await getProviders();

  return (
    <div className="flex items-center justify-center h-screen">
      {providers ? (
        Object.values(providers).map((p: ClientSafeProvider) => (
          <div key={p.id}>Sign in with {p.name}</div>
        ))
      ) : (
        <div>No providers available</div>
      )}
    </div>
  )
}

export default LoginPage

// export async function getServerSideProps() {

//   const providers = await getProviders();
//   console.log("get server sider pros function is called.");
//   return {   
//     props: {providers},
//   }
  
// }