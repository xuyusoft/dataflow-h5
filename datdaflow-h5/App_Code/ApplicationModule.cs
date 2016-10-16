using System.IO;
using System.Web;

namespace ReactRouter
{
    public class ApplicationModule : IHttpModule
    {
        readonly static string Main = "~/index.aspx";

        public void Init(HttpApplication context)
        {
            context.BeginRequest += (a, b) =>
            {
                var application = (HttpApplication)a;

                var ext = Path.GetExtension(application.Context.Request.Url.ToString());

                if (string.IsNullOrEmpty(ext))
                {
                    application.Context.Server.Transfer(Main, true);
                }
            };
        }

        public void Dispose()
        {

        }
    }
}