using Funq;
using ServiceStack.Text;
using ServiceStack.WebHost.Endpoints;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Transpaction
{
    public class AppHost : AppHostBase
    {
        public AppHost() : base("transactions", typeof (AppHost).Assembly)
        {
        }

        public override void Configure(Container container)
        {
            SetConfig(new EndpointHostConfig(){ServiceStackHandlerFactoryPath = "api"});
            JsConfig.DateHandler = JsonDateHandler.ISO8601;
            JsConfig.EmitCamelCaseNames = true;
        }
    }
}
