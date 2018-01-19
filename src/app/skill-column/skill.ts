export class Skill {
  category: string;
  highlightedSkillA: string;
  highlightedSkillB: string;
  skillAPercent: string;
  skillBPercent: string;
  extraList: string[];

  static skill1 = new Skill(
    "Languages",
    "C#",
    "Python",
    "85%",
    "70%", 
    ["Java", "JavaScript", "Bash", "KornShell", "PHP", "Ruby", "HTML", "CSS"]);

  static skill2 = new Skill(
      "Frameworks",
      ".Net",
      "Django",
      "80%",
      "65%", 
      ["Angular", "Django Rest Framework", "Bootstrap", ".Net Entity Framework", "D3"]);

  static skill3 = new Skill(
    "Operating Systems:",
    "UNIX",
    "Windows",
    "75%",
    "77%", 
    ["Visual Code", "Open Shift", "Microsoft SSMS", "Microsoft SSIS", "Splunk", "Version Control", 
    "NetBeans", "Eclipse", "VIM", "Excel", "PyCharm", "Putty"]);

  constructor(category: string, highlightedSkillA: string, 
  highlightedSkillB:string, skillAPercent:string, skillBPercent:string,
  extraList:string[] )
  {
    this.category = category;
    this.highlightedSkillA = highlightedSkillA;
    this.highlightedSkillB = highlightedSkillB;
    this.skillAPercent = skillAPercent;
    this.skillBPercent = skillBPercent;
    this.extraList = extraList;
  }

}