//useRouterError is used to write more content or description abput the error in error page
import { useRouteError } from "react-router-dom"


//rafce - short form to create this
const Error = () => {
    const err = useRouteError();
    console.log(err)
  return (
    <div>
      <h1>OOPS!!!</h1>
      <h2>Something went wrong</h2>
      <h3>
        {err.status}: {err.statusText} {/*from console */}
      </h3>
    </div>
  );
};

export default Error
