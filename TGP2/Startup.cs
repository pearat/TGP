using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TGP2.Startup))]
namespace TGP2
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
