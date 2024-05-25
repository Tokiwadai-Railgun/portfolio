// import { items } from '@data/projects';

// export function load({ params }: { params: Record<string, string> }) {
// 	if (params.slug) {
// 		const project = items.find((item) => {
// 			return item.slug === params.slug;
// 		});

// 		return { project };
// 	}
// }


import { mysqlconFn } from '$lib/utils/mysql';
import { a } from '$lib/data/assets';

export async function load({ params }: { params: Record<string, string>}) {
  if (params.slug) {

    const mysqlconn = await mysqlconFn()
    const query = `
    SELECT 
      project.slug, 
      project.color, 
      project.description, 
      short_description AS shortDescription, 
      project.logo, 
      project.name, 
      start_date, 
      end_date, 
      type, 
      JSON_ARRAYAGG(JSON_OBJECT('to', \`to\`, 'label', label)) AS links,
      JSON_ARRAYAGG(JSON_OBJECT(
          'slug', s.slug,
          'color', s.color,
          'description', s.description,
          'logo', s.logo,
          'name', s.name,
          'category', s.category
      )) AS skills
      FROM 
          project 
      JOIN 
          link ON project.slug = link.related_slug 
      JOIN 
          project_skill p_s ON p_s.project_slug = project.slug
      JOIN 
          skills s ON s.slug = p_s.skill_slug
      WHERE 
          project.slug = 'izuna-hatsuse'
      GROUP BY 
          slug, color, description, short_description, logo, name, start_date, end_date, type;`;

    // Query will return one and only project in multiple rows, one for each skills

    try {
      let result = await mysqlconn.query(query).then(function([rows, fields]){
        return rows;
      })

      // forming the period object in the result
      // Since the query returns as much rows as skills we take the first row to make the project object and then loop to retrieve all skills
      
      // Filtering skills array to avoid double
      result[0].skills = result[0].skills.filter((skill, index, skillArray) => index === skillArray.findIndex(s => s.slug === skill.slug))

      result[0].links = result[0].links.filter((link, index, linkArray) => index === linkArray.findIndex(l => l.to === link.to))
      let project = result[0];
      for (let project of result) {
        let period = project.end_date ?  {from: project.start_date, to: project.end_date} : {from: project.start_date}
        project.period = period

        project.logo = a(project.logo)

        // Now for each skills get the logo properly
        for (let skill of project.skills) {
          // checking if the item is present mutliple time
          skill.logo = a(skill.logo)
        }

      }

      return {project: result[0]}
    } catch (err){
      console.log("Error fetching data from table \"project\"")
      console.log(err)
    }
  }

}
