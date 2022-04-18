import React from "react";

const Blog = () => {
  return (
    <div className="vh-100  d-flex flex-column  align-items-center">
      <h1 className="common text-center my-5">blog</h1>
      <div className="container my-4">
      <div class="row">
        <div class="col-sm">
         <h3 className="common">Authentication vs authorization</h3>
         <p>authentication determine user who claim to be .authorization determine what user can and can not access.usually done before authorization on the other hand authrization usually done bofore authentication. transmit info through id tocken on the other hand authorization transmit info through an Access tocken.govern by (OIDC) but authorization govern by OAuth 2.0 framework</p>   
        </div>
        <div class="col-sm">
            <h3 className="common">purpose of using firebase</h3>
            <p>i use firebase because of this framework is beginer friendly.less technical back end code for dynamic app .In firebase easily can be authentication. there is also hosting service are provided.and also provide google product feature.</p>
            <h5>there are most relaiable alternative of firebase is Auth0, MongoDB, Passport, Okta</h5>
        </div>
        <div class="col-sm">
           <h3 className="common">services  firebase provides other than authentication</h3>
           <p>the other services of firebase than authentication are (unlimited reporting,Audience segmentation,Cloud messaging,Hoisting, Remote Configuratin,Dynamic Link,Crash Reporting,RealtimeDatabase, storage, app indexing, invites,Notification)</p> 
        </div>
      </div>
      </div>
    </div>
  );
};

export default Blog;
