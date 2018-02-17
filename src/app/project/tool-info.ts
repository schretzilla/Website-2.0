export class UrlObject {
  name: string;
  url: string;

  static TwitterBootstrapV3 = new UrlObject("Twitter Bootstrap v3", "http://getbootstrap.com/")

  static TwitterBootstrapV2 = new UrlObject("Twitter Bootstrap v2", "http://getbootstrap.com/2.3.2/");
  
  static GithubPages = new UrlObject("Github Pages", "https://pages.github.com/");

  static Splunk = new UrlObject("Splunk", "http://www.splunk.com/");

  static SSMS = new UrlObject("SSMS", "https://en.wikipedia.org/wiki/SQL_Server_Management_Studio");

  static SSIS = new UrlObject("SSIS", "https://en.wikipedia.org/wiki/SQL_Server_Integration_Services");

  static MicrosoftSqlDb = new UrlObject("Microsoft SQL Database", "" );

  static CSharp = new UrlObject("C#", "");

  static DotNetWeb = new UrlObject(".Net Web Application", "");

  static DotNetEntity = new UrlObject("ADO .Net Entity Framework", "");

  static Jquery = new UrlObject("jQuery", "");

  static Heroku = new UrlObject("Heroku", "https://www.heroku.com/");

  static PostgreSql9 = new UrlObject("PostgreSQL 9.2", "http://www.https.postgresql.org/");

  static DjangoRest = new UrlObject("Django Rest Framework", "http://www.django-rest-framework.org/");

  static Angular1 = new UrlObject("AngularJS 1", "https://angularjs.org/");

  static Python2 = new UrlObject("Python 2.7", "");

  static Django1 = new UrlObject("Django 1.9", "https://www.djangoproject.com/");

  static D3V4 = new UrlObject("D3 v4", "https://d3js.org/");

  static Bluma = new UrlObject("Bulma CSS", "https://bulma.io/");

  static Plotly = new UrlObject("plotly.js", "https://plot.ly/javascript/");

  static Esp32 = new UrlObject("ESP32", "https://www.espressif.com/en/products/hardware/esp32/overview");

  constructor(name: string, url: string )
  {
    this.name = name;
    this.url = url;
  }

}