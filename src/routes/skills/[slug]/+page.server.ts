import { mysqlconFn } from '$lib/utils/mysql';
import { a } from '$lib/data/assets';

export async function load({ params }: { params: Record<string, string> }) {
  if (!params.slug) return null
  const mysqlconn = await mysqlconFn()
  const query = `
    SELECT skills.slug, skills.name, logo, description, JSON_OBJECT('name', category.name, 'slug', category.slug) AS category 
    FROM skills JOIN skills_category category 
    ON skills.category = category.slug
    WHERE skills.slug = '${params.slug}';
`

  try {
    let result = await mysqlconn.query(query).then(function([rows, fields]){
      return rows;
    })

    result[0].logo = a(result[0].logo)

    // Now get related Projects
    const relatedQuery = `
    SELECT 
        p.slug,
        p.name, 
        p.logo as img,
        CONCAT(p.name, ' (Project)') as display,
        CONCAT('/projects/', p.slug) as link
    FROM 
        project p
    JOIN 
        project_skill ps ON ps.project_slug = p.slug
    JOIN 
        skills s ON s.slug = ps.skill_slug
    WHERE 
        s.slug = '${params.slug}';`;

    let relatedProjectResult = await mysqlconn.query(relatedQuery).then(function([rows, fields]){
      return rows;
    })

    relatedProjectResult.forEach(project => {
      project.img = a(project.img)
      project.url = `/projects/${project.slug}`
    });


    return { skill: result[0], related: relatedProjectResult}
  } catch (err) {
    console.log("Error fetching data", err)
  }
}
