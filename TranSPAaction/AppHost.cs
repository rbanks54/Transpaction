using Funq;
using ServiceStack.Text;
using ServiceStack.WebHost;
using ServiceStack.WebHost.Endpoints;

namespace TranSPAaction
{
    public class AppHost : AppHostBase
    {
        public AppHost() : base("Transaction Services", typeof(AppHost).Assembly) { }
        public override void Configure(Container container)
        {
            SetConfig(new EndpointHostConfig() { ServiceStackHandlerFactoryPath = "api" });
            JsConfig.EmitCamelCaseNames = true;
            JsConfig.DateHandler = JsonDateHandler.ISO8601;
        }
    }
}