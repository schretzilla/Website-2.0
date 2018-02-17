export class ToolInfo {
  toolName: string;
  toolUrl: string;

  static d3Tool = new ToolInfo("D3", "https://d3js.org/");

  static twitterBootstrap = new ToolInfo("Twitter Bootstrap v3", "http://getbootstrap.com/")
  
  static githubPages = new ToolInfo("Github Pages", "https://pages.github.com/");

  constructor(toolName: string, toolUrl: string )
  {
    this.toolName = toolName;
    this.toolUrl = toolUrl;
  }

}