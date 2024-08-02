import { a } from '$lib/data/assets';

export async function load({ params, platform }: { params: Record<string, string>}) {
  if (params.slug) {

    const { results } =await platform.env.DB.prepare (`
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
      JSON_ARRAYAGG(JSON_OBJECT('to', \`to\`, 'label', link.label)) AS links,
      JSON_ARRAYAGG(JSON_OBJECT(
          'slug', s.slug,
          'color', s.color,
          'description', s.description,
          'logo', s.logo,
          'name', s.name,
          'category', s.category
      )) AS skills,
      JSON_ARRAYAGG(JSON_OBJECT('label', p_screen.\`label\`, 'src', src)) AS screenshots
      FROM 
          project 
      JOIN 
          link ON project.slug = link.related_slug 
      JOIN 
          project_skill p_s ON p_s.project_slug = project.slug
      JOIN 
          skills s ON s.slug = p_s.skill_slug
      JOIN
        project_screenshots p_screen ON p_screen.project_slug = project.slug
      WHERE 
          project.slug = ?
      GROUP BY 
          slug, color, description, short_description, logo, name, start_date, end_date, type;`
    ).bind(params.slug).all();

    // Query will return one and only project in multiple rows, one for each skills

    try {
      // forming the period object in the result
      // Since the query returns as much rows as skills we take the first row to make the project object and then loop to retrieve all skills
      
      // Filtering skills array to avoid double
      results[0].skills = results[0].skills.filter((skill, index, skillArray) => index === skillArray.findIndex(s => s.slug === skill.slug))
      // Filtering screenshots
      results[0].screenshots = results[0].screenshots.filter((screenshot, index, screenshotsArray) => index === screenshotsArray.findIndex(s => s.label === screenshot.label))
      // Filtering links
      results[0].links = results[0].links.filter((link, index, linkArray) => index === linkArray.findIndex(l => l.to === link.to))

      for (let project of results) {
        let period = project.end_date ?  {from: project.start_date, to: project.end_date} : {from: project.start_date}
        project.period = period

        project.logo = a(project.logo)

        // Now for each skills get the logo properly
        for (let skill of project.skills) {
          // checking if the item is present mutliple time
          skill.logo = a(skill.logo)
        }
      }

      return {project: results[0]}
    } catch (err){
      console.log("Error fetching data from table \"project\"")
      console.log(err)
    }
  }

}
