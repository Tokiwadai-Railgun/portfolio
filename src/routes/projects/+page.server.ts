import { a } from "$lib/data/assets";
import { getSkills } from "$lib/data/skills";

// Getting all projects from the database
export async function load({ platform }) {
  const { results }= await  platform.env.DB.prepare(`SELECT slug, color, description, short_description AS shortDescription, logo, name, start_date, end_date, skills, type, 
  json_group_array(json_object('to',\`to\`, 'label', label)) AS links
  FROM project 
  JOIN link ON project.slug = link.related_slug GROUP BY slug, color, description, short_description, logo, name, start_date, end_date, skills, type;`
  ).all();

  try {
    // forming the period object in the result
    for (let project of results) {
      let period = project.end_date ?  {from: project.start_date, to: project.end_date} : {from: project.start_date}
      project.period = period

      project.logo = a(project.logo)
      if (project.skills != "" && project.skills != null) project.skills = getSkills(project.skills.split(";"));

      if (project.period.from) project.period.from = new Date(project.period.from)
      if (project.period.to) project.period.to = new Date(project.period.to)
      project.links = JSON.parse(project.links);
    }

    return {project: results}
  } catch (err){
    console.log("Error fetching data from table \"project\"")
    console.log(err)
  }
}
