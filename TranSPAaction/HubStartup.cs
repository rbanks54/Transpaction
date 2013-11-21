using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(TranSPAaction.HubStartup))]
namespace TranSPAaction
{
    public class HubStartup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}